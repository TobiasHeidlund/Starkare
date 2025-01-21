const { app, HttpResponse  } = require('@azure/functions');
const { EmailClient } = require("@azure/communication-email");

const connectionString = process.env['COMMUNICATION_SERVICES_CONNECTION_STRING'];
const client = new EmailClient(connectionString);


require('dotenv').config();
app.http('emailApi', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
      context.log(`Http function processed request for url "${request.url}"`);
      context.log(`Http function processed request body: "${JSON.stringify(request.body)}"`);

      try {
          // Call the main function to send the email
          await main(request.body);

          // Return a success response
          const response = new HttpResponse({
              status: 200,
              body: "Email sent successfully."
          });
          return response;
      } catch (e) {
          // Log the error and return a failure response
          context.log("Error occurred while sending email:");
          context.log(e);

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
    },
    recipients: {
        to: [{ address: "tobias199@gmail.com" }],
    },
  };
  const poller = await client.beginSend(emailMessage);
  if (!poller.getOperationState().isStarted) {
    throw "Poller was not started."
  }

  let timeElapsed = 0;
  while(!poller.isDone()) {
    poller.poll();
    console.log("Email send polling in progress");

    await new Promise(resolve => setTimeout(resolve, POLLER_WAIT_TIME * 1000));
    timeElapsed += 10;

    if(timeElapsed > 18 * POLLER_WAIT_TIME) {
      throw "Polling timed out.";
    }
  }

  if(poller.getResult().status === KnownEmailSendStatus.Succeeded) {
    console.log(`Successfully sent the email (operation id: ${poller.getResult().id})`);
  }
  else {
    throw poller.getResult().error;
  }
}