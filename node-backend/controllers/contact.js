const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const sendEmail = require("../utils/sendEmail");

exports.contact = (req, res, next) => {
  // ATTACHMENTS
  let attachments = [];
  if (req.files === null) {
    next();
  } else if (req.files.files.length) {
    for (let i = 0; i < req.files.files.length; i++) {
      console.log("it worked");
      attachments.push({
        path:
          "data:image/jpeg;base64," + req.files.files[i].data.toString("base64")
      });
    }
  } else {
    attachments.push({
      path: "data:image/jpeg;base64," + req.files.files.data.toString("base64")
    });
  }
  // ATTACHMENTS

  const { name, email, phone, subject, designNote } = req.body;
  const formattedPhone =
    phone.substr(0, 3) + "-" + phone.substr(3, 3) + "-" + phone.substr(6, 4);
  const formattedName = name
    .toLowerCase()
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");

  const output = `
  <style>
    body{
      margin:0;
      padding:0;
       background:whitesmoke;
    }
   .center{

     margin-top:0;
     justify-content: flex-start;

   }
   .title{
        margin-top:1rem;
        margin-bottom:2rem;
       padding-left:3rem;

     }
     .fontSize{
       font-size:1.2rem;
     }
     .secondTitle{
        margin-bottom:1rem;
       padding-left:1rem;
     }
  </style>
  <div class="center">
    <h2 class="title">Adriana, You have a new contact request.</h2>
    <h3 class="secondTitle">Contact Details.</h3>
    <ul class="fontSize">
      <li>Name: ${formattedName}.</li>
      <li>Subject: ${subject}.</li>
      <li>Email: ${email}</li>
      <li>Phone: ${formattedPhone}</li>
    </ul>
    <h2 class="title"> Message</h2>
    <p class="title fontSize">${designNote}</p>
    </div>
  `;
  let replyTo = email;
  let inReplyTo = `Hello ${name} <br/>
   this is a test`;
  try {
    sendEmail({
      email,
      subject,
      attachments,
      output,
      replyTo,
      inReplyTo
    });
    res.status(200).json({
      success: true,
      data: "Email sent"
    });
  } catch (error) {
    return console.error(error);
  }
  next();
};

exports.contactQuote = (req, res, next) => {
  const {
    name,
    email,
    subject,
    phone,
    message,
    dateTime,
    eventDate,
    deliveryDate,
    deliveryTime,
    eventType,
    location,
    stretAddress,
    designNote,
    filling,
    soak,
    flavour,
    state,
    numberOfGuest,
    isFirstTimeCustumer,
    isReturningCustumer
  } = req.body;
  // ATTACHMENTS
  let attachments = [];
  if (req.files === null) {
    next();
  } else if (req.files.files.length) {
    for (let i = 0; i < req.files.files.length; i++) {
      console.log("it worked");
      attachments.push({
        path:
          "data:image/jpeg;base64," + req.files.files[i].data.toString("base64")
      });
    }
  } else {
    attachments.push({
      path: "data:image/jpeg;base64," + req.files.files.data.toString("base64")
    });
  }
  // ATTACHMENTS

  const formattedPhone =
    phone.substr(0, 3) + "-" + phone.substr(3, 3) + "-" + phone.substr(6, 4);
  const formattedName = name
    .toLowerCase()
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");

  const output = `
  <style>
    body{
      margin:0;
      padding:0;
       background:whitesmoke;
    }
   .center{

     margin-top:0;
     justify-content: flex-start;
    
     
   }
   .title{
        margin-top:1rem;
        margin-bottom:2rem;
       padding-left:3rem;
    
     }
     .fontSize{
       font-size:1.2rem;
     }
     .secondTitle{
        margin-bottom:1rem;
       padding-left:1rem;
     }
  </style>
   <div class="center">
     <h2 class="title">Adriana, You have a new custome quote request.</h2>
    <h3 class="secondTitle">Custome quote Details</h3>
    <ul class="fontSize">  
      <li>Name: ${formattedName}</li>
      <li>Subject: ${subject}</li>
      <li>Email: ${email}</li>
      <li>Phone: ${formattedPhone}</li>
      <li>Event Date: ${eventDate}  </li>
      <li>Event Type: ${eventType}  </li>
      <li>Collection/Delivery Date: ${deliveryDate}  </li>
      <li>Collection/Delivery Time: ${deliveryTime}  </li>
      <li>Address: ${stretAddress} </li>
      <li>City: ${location} </li>
      <li>State: ${state} </li>
      <li>filling: ${filling} </li>
      <li>Soaks:${soak}</li>
      <li>flavour: ${flavour} </li>
      <li> Number Of Guests: ${numberOfGuest}  </li>
      <li> First Time Custumer: ${isFirstTimeCustumer}  </li>
      <li> Returning Custumer: ${isReturningCustumer}  </li>
       
    </ul>
    <h3 class="title">Additonal Notes</h3>
    <p class="title fontSize">${message}</p>
    <br/>
     <h3 class="title"> Design Notes</h3>
    <p class="title fontSize">${designNote}</p>
    </div>
  `;

  try {
    sendEmail({
      email,
      subject,
      message,
      attachments,
      output
    });
    res.status(200).json({ success: true, data: "Email sent" });
  } catch (error) {
    console.error(error);
  }
};
