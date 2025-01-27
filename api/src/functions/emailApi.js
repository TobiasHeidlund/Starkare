const { app, HttpResponse } = require('@azure/functions');
const { EmailClient, KnownEmailSendStatus } = require("@azure/communication-email");
const { json } = require('react-router-dom');
const connectionString = process.env['COMMUNICATION_SERVICES_CONNECTION_STRING'];
if (!connectionString) {
    throw new Error("Environment variable for 'COMMUNICATION_SERVICES_CONNECTION_STRING' is missing.");
}
const client = new EmailClient(connectionString);

require('dotenv').config();

const POLLER_WAIT_TIME = .5; // Define POLLER_WAIT_TIME in seconds

app.http('emailApi', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        const requestBody = await request.text();
        const requestjson = await request.json();
        context.log(`Http function processed request body: "${requestBody}"`);
        context.log(`Http function processed request json: "${JSON.stringify(requestjson)}"`);
        try {
            // Call the main function to send the email
            await main(request);

            // Return a success response
            const response = new HttpResponse({
                status: 200,
                body: "Email sent successfully."
            });
            return response;
        }  catch (e) {
            const response = new HttpResponse({
                status: 500,
                body: `Failed to send email: ${e.message}`
            });
            return response;
        }
    }
});

// async..await is not allowed in global scope, must use a wrapper
async function main(msg) {
    const emailMessage = {
        senderAddress: "DoNotReply@a8c08042-a6a8-4488-816e-11a140e08d95.azurecomm.net",
        content: {
            subject: "Test Email",
            plainText: JSON.stringify(msg),
            json: msg
        },
        recipients: {
            to: [{ address: "tobias199@gmail.com" }],
        },
    };
    const poller = await client.beginSend(emailMessage);
    if (!poller.getOperationState().isStarted) {
        throw "Poller was not started.";
    }

    let timeElapsed = 0;
    while (!poller.isDone()) {
        poller.poll();
        console.log("Email send polling in progress");

        await new Promise(resolve => setTimeout(resolve, POLLER_WAIT_TIME * 1000));
        timeElapsed += POLLER_WAIT_TIME;

        if (timeElapsed > 18 * POLLER_WAIT_TIME) {
            throw "Polling timed out.";
        }
    }

    if (poller.getResult().status === KnownEmailSendStatus.Succeeded) {
        console.log(`Successfully sent the email (operation id: ${poller.getResult().id})`);
    } else {
        throw poller.getResult().error;
    }
}