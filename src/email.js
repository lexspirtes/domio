var nodemailer = require('nodemailer');
require('dotenv').config()
let emailFunctions = {}

//create transporter for emails to send
var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});

/* mailOptions
  parameters:
    body: string
      - body of email
    subject: string
      - subject of email
  returns:
    JSON object to send email
*/
const mailOptions = (body, subject) => {
  return {
    from: process.env.FROM,
    to: process.env.TO,
    subject: subject,
    html: `<p>${body}</p>`
  }
};

/* meetsRequirements
  parameters:
    data: property object
  returns:
    bool: true if valid to send email
*/
emailFunctions.meetsRequirements = function(data) {
  if ((data.type == 'apartment' && data.basePrice > data.dynamicDisplayPrice) ||
     (data.type == 'home' && data.basePrice < data.dynamicDisplayPrice)) {
       return true
     }
  return false
}

/* meetsRequirements
  parameters:
    data: property object
  sends email if valid
*/
emailFunctions.sendEmail = function(data) {
  if (emailFunctions.meetsRequirements(data)) {
       const body =  `Type = ${data.type} Dynamic Display Price = ${data.dynamicDisplayPrice}
        Base Price = ${data.basePrice}`
       const subject = data.type == 'apartment' ?
       'Apartment Dynamic Display Price is less than Base Price!' :
       'Home Dynamic Display Price is more than Base Price!'
       transporter.sendMail(mailOptions(body, subject), function (err, info) {
           if (err) {
             console.log(err)
           }
           else {
             console.log(info);
           }
        });
    }
}

module.exports = emailFunctions
