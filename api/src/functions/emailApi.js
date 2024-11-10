const { app, HttpResponse  } = require('@azure/functions');
const nodemailer = require("nodemailer");
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

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "abdul.schoen@ethereal.email",
    pass: "em1mTfY83D8SHZ38Hm",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(msg) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "tobias199@gmail.com, tobias199@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: JSON.stringify(msg), // plain text body
  });
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}