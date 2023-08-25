const express = require("express");
const cors = require("cors");
const nodeMailer = require("nodemailer");
const bodyParser = require("body-parser");

require("dotenv").config();

const server = express();
server.use(cors());

server.use(express.json());
server.use(bodyParser.json());

server.use(express.urlencoded({ extended: false }));

async function sendEmail({ firstName, lastName, email, orderInfo }) {
  const contactFormText = `
  First Name: ${firstName}
  Last Name:${lastName} 
  Email: ${email}
  Order Information: ${orderInfo}
`;
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.gmailUser,
      pass: process.env.gmailPassword,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.gmailUser,
    to: process.env.gmailReceiver,
    subject: "New Contact-Form Submission",
    text: `${contactFormText} `,
  });
  console.log("message sent: " + info.messageId);
}

server.get("/api/data", (req, res) => {
  // Mock data for demonstration purposes
  const data = {
    message: "Hello from the server!",
    additionalData: "This is some additional data from the server.",
  };
  res.json(data);
});

server.post("/send-email", (req, res) => {
  const formData = req.body;
  sendEmail(formData)
    .then(() => {
      res.status(200).json({ message: "Email sent successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Error sending email" });
    });
});

const PORT = process.env.PORT || 9006;

server.listen(PORT, () => {
  console.log(`Darcy is running the server on ${PORT}`);
});

module.exports = server;
