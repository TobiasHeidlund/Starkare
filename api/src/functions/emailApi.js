const { app, HttpResponse } = require('@azure/functions');
const { EmailClient, KnownEmailSendStatus } = require("@azure/communication-email");
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
        start = Date.now();
        context.log(`Http function processed request for url "${request.url}"`);
        const requestBody = await request.text();
        if (requestBody == '{"email":"ping"}') {
            return new HttpResponse({
                status: 200,
                body: (typeof requestBody) + " " + requestBody
            });
        }

        //context.log(`Http function processed request body: "${requestBody}"`);
        try {
            // Call the main function to send the email
            main(requestBody);

            // Return a success response
            const response = new HttpResponse({
                status: 200,
                body: "Email sent successfully."
            });
            context.log(`RequestTook "${Date.now() - start}"ms`);
            return response;
        }  catch (e) {
            context.error(`Request Failed for "${request.url}"`);
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
        senderAddress: "DoNotReply@59c7f365-c213-46a7-9935-397ad4ab7d30.azurecomm.net",
        content: {
            subject: "Test Email",
            plainText: msg,
        },
        recipients: {
            to: [{ address: "starkare@starkarecrossfit.se" }],
        },
    };
    const poller = await client.beginSend(emailMessage);
    if (!poller.getOperationState().isStarted) {
        context.error(`Request Failed message "${emailMessage}"`);
        throw "Poller was not started.";
    }

    let timeElapsed = 0;
    while (!poller.isDone()) {
        poller.poll();
        console.log("Email send polling in progress");

        await new Promise(resolve => setTimeout(resolve, POLLER_WAIT_TIME * 1000));
        timeElapsed += POLLER_WAIT_TIME;

        if (timeElapsed > 18 * POLLER_WAIT_TIME) {
            context.error(`Request Failed message "${emailMessage}"`);
            throw "Polling timed out.";
        }
    }

    if (poller.getResult().status === KnownEmailSendStatus.Succeeded) {
        context.log(`Successfully sent the email (operation id: ${poller.getResult().id})`);
        console.log(`Successfully sent the email (operation id: ${poller.getResult().id})`);
    } else {
        context.error(`Request Failed message "${emailMessage}"`);
        throw poller.getResult().error;
    }
}
