function name(req, res, next) {
  return next();
}
const { name, email, phone, subject, designNote } = req.body;
const formattedPhone =
  phone.substr(0, 3) + "-" + phone.substr(3, 3) + "-" + phone.substr(6, 4);
const formattedName = name
  .toLowerCase()
  .split(" ")
  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
  .join(" ");

exports.output = `
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
       
    </ul>
    <h3 class="title">Additonal Notes</h3>
    <p class="title fontSize">${message}</p>
    <br/>
     <h3 class="title"> Design Notes</h3>
    <p class="title fontSize">${designNote}</p>
    </div>
  `;
