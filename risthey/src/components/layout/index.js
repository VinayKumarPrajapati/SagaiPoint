const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);

app.get("/", () => {
  resizeBy.send("welcome");
});

app.post("/api/form", (req, res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "vinay91098@gmail.com",
      pass: "Vinayk076@1",
    },
  });

  let mailOptions = {
    form: data.email,
    to: "vinay.prajapati@sagaipoint.com",
    subject: `Message from Sagai Point email id: ${data.email}`,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("Success");
    }
  });

  smtpTransport.close();
});
