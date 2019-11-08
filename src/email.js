var nodemailer = require('nodemailer');
require('dotenv').config()

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});

const mailOptions = (body, subject) => {
  return {
    from: process.env.FROM,
    to: process.env.TO,
    subject: subject,
    html: `<p>${body}</p>`
  }
};

//send email function
module.exports = {
  sendEmail : function(data) {
    if ((data.type == 'apartment' && data.basePrice > data.dynamicDisplayPrice) ||
       (data.type == 'home' && data.basePrice < data.dynamicDisplayPrice)) {
         const body =  `Type = ${data.type} Dynamic Display Price = ${data.dynamicDisplayPrice}
          Base Price = ${data.basePrice}`
         const subject = data.type == 'apartment' ?
         'Apartment Dynamic Display Price is less than Base Price!' :
         'Home Dynamic Display Price is more than Base Price!'
         //send email
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
}
