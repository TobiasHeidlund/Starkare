var express = require('express');
require('dotenv').config();
var app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const port = process.env.PORT

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "florida57@ethereal.email",
    pass: "2nYUP8CCPBthVrtw96",
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

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}



app.post("/submit",(request, response)=>{

    console.log("body is:", request.body)

    main(request.body).then(()=>{

    });

    console.log("HELLO")
    response.status(200).json({ message: "Completed" }); // Use status and json directly

});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
