const nodemailer = require("nodemailer");
const { render } = require("ejs");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.html");
});

router.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  contentHTML = `
            <h1>User Information</h1>
            <ul>
            <li>${name}</li>
            <li>${email}</li>
            </ul>
            <p>${message}</p>
  `;
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "47bb5f3d91bdb6",
      pass: "d2527c2181ba79",
    },
  });

  const info = await transport.sendMail({
    from: "pagina personal",
    to: "gabs88.nu@gmail.com",
    subject: " website",
    text: "hello world",
  });

  console.log("message send", info.messageId);
});

module.exports = router;
