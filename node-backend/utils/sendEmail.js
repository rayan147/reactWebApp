const nodemailer = require("nodemailer");
const inlineBase64 = require("nodemailer-plugin-inline-base64");
const sendEmail = async options => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    }
  });

  const message = {
    from: options.email,
    to: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    subject: options.subject,
    text: options.message,
    html: options.output,
    attachments: options.attachments,
    replyTo: options.replyTo,
    inReplyTo: options.inReplyTo
  };

  const info = await transporter.sendMail(message);
  transporter.use("compile", inlineBase64({ cidPrefix: "somePrefix_" }));

  console.log("Message sent: %s", info.messageId);
};

module.exports = sendEmail;
