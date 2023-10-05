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
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_RECEIVER,
    subject: "New Contact-Form Submission",
    text: contactFormText,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

server.get("/api/data", (req, res) => {
  // Mock data for demonstration purposes
  const data = {
    message: "Hello from the server!",
    additionalData: "This is some additional data from the server.",
  };
  res.json(data);
});

server.post("/send-email", async (req, res) => {
  const formData = req.body;
  try {
    await sendEmail(formData);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error sending email" });
  }
});

const PORT = process.env.PORT || 9007;

server.listen(PORT, () => {
  console.log(`Darcy's Server is running on port ${PORT}`);
});

module.exports = server;
