const ErrorResponse = require("./utils/errorResponse");
const asyncHandler = require("./middleware/async");
const sendEmail = require("./utils/sendEmail");

exports.contact = (req, res, next) => {
  const { name, email, phone, subject, designNote } = req.body;
  console.log(req.body);
  const formattedPhone =
    phone.substr(0, 3) + "-" + phone.substr(3, 3) + "-" + phone.substr(6, 4);
  const formattedName = name
    .toLowerCase()
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
  if (req.files === null) {
    return res.status(404).json({ msg: "No file was uploaded" });
  }

  //convert file to base64
  const base64Image = req.files.files.data.toString("base64");
  console.log(base64Image);

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
    <li>Images:</li>
    <picture><img src="data:image/*;base64,${base64Image}" height="400" width="250"/></picture>
     
     
       
    </ul>
    <h2 class="title"> Message</h2>
    <p class="title fontSize">${designNote}</p>
    </div>
  `;
  try {
    sendEmail({
      email,
      subject,
      output
    });
    res.status(200).json({ success: true, data: "Email sent" });
  } catch (error) {
    return console.error(error);
  }
  next();
};

exports.contactQuote = asyncHandler(async (req, res, next) => {
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
    numberOfGuest,
    isFirstTimeCustumer,
    isReturningCustumer
  } = req.body;
  console.log(req.body);
  const formattedPhone =
    phone.substr(0, 3) + "-" + phone.substr(3, 3) + "-" + phone.substr(6, 4);
  const formattedName = name
    .toLowerCase()
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");

  if (req.files === null) {
    return res.status(404).json({ msg: "No file was uploaded" });
  }

  //convert file to base64
  const base64Image = req.files.files.data.toString("base64");
  console.log(base64Image);

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
      <li>location: ${location} </li>
      <li>Stret Address: ${stretAddress} </li>
      <li>filling: ${filling} </li>
      <li>Soaks:${soak}</li>
      <li>flavour: ${flavour} </li>
      <li> Number Of Guests: ${numberOfGuest}  </li>
      <li> First Time Custumer: ${isFirstTimeCustumer}  </li>
      <li> Returning Custumer: ${isReturningCustumer}  </li>
       <li>Images:</li>
    <picture><img src="data:image/*;base64,${base64Image}" height="400" width="250"/></picture>
      
      <br/>
      
     
       
    </ul>
    <h3 class="title">Additonal Notes</h3>
    <p class="title fontSize">${message}</p>
    <br/>
     <h3 class="title"> Design Notes</h3>
    <p class="title fontSize">${designNote}</p>
    </div>
  `;

  console.log(req.body);
  try {
    await sendEmail({
      email,
      subject,
      message,
      output
    });
    res.status(200).json({ success: true, data: "Email sent" });
  } catch (error) {
    return next(new ErrorResponse("Email could not be sent", 500));
  }
});
