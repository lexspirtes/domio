# domio

## To Run
- download 
- go into directory
- npm start
- to run tests, npm test

## Approach 
- Email handling 
  - nodemailer
- setInterval 
  - nodefetch 
  - completes fetch every 5 seconds 
  - when data is fetched, adds each entry to DB and checks if it meets
  sendEmail requirements outlined in Part 2. 
  

## Part III
Refactoring Current Code:
- refactor meetsRequirements into sendNotifications function:
  - to split into different property types that if valid
  - would implement the helper functions outlined below, that would actually send the data: this way, if desired, I could get multiple notifications for one property type
- create additional functions sendSMS(data), sendPush(data)... that would send the appropriate notification
- replace ternary statement with a function, generateText(data, notificationType) -> String that creates the appropriate text for the notification type and 
- call sendNotifications instead of sendEmail within server.js
Additional Needs
- support for multiple accounts (email, phone), phone number to send sms from 
- make mobile app to enable push notifications from 

## Further Implementation
- more testing
  - currently I only test the valid statement, I would create testing for:
    - inserting values into DB
    - sending emails 
- filling DB multiple rows at a time
- change email receiving to accommodate dynamic lists!
