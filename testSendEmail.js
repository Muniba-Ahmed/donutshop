// const { sendEmail } = require("./server.js");

// const testData = {
//   firstName: "John",
//   lastName: "Doe",
//   email: "john.doe@example.com",
//   orderInfo: "Test Order Information",
// };

// async function testSendEmail() {
//   try {
//     await sendEmail(testData);
//     console.log("Email sent successfully!");
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// }

// // Call the testSendEmail function
// testSendEmail();

const express = require("express");
const cors = require("cors");

const { sendEmail } = require("./server"); // Replace with the actual path to your server file

const testData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  orderInfo: "Test Order Information",
};

async function testSendEmail() {
  try {
    await sendEmail(testData);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

// Call the testSendEmail function
testSendEmail();
