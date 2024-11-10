const { app } = require('@azure/functions');
const nodemailer = require("nodemailer");
require('dotenv').config();
const cors = require('cors');
app.use(cors());
app.http('emailApi', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

       
        main(request.body).then(()=>{
           const response = new HttpResponse({ body: `` });
           return response
        }).catch(e =>{
            const response = new HttpResponse({ body: e });
            context.log(`THIS WENT WRONG:`);
            context.log(e);
            response.status = 501
            response.body.set 
            return response;
        });
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