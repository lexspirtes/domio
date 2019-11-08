# domio

## To Run
- navigate to src directory
- change env file to fulfill email parameters
- node server.js

## Decisions
- Email handling 
  - nodemailer
- setInterval 
  - nodefetch 
  - completes fetch every 5 seconds 
  - when data is fetched, adds each entry to DB and checks if it meets
  sendEmail requirements outlined in Part 2. 
  

## Part III
In order to accommodate for more rental types, I would:
- replace my if statement with a meetsRequirements(type) -> bool function that holds the logic for the requirements for each of the types, so that the logic is easily understood and changed. 
- replace ternary statement with a separate function that creates a subject and body according to the information desired 

## Further Implementation
- more testing
- filling DB multiple rows at a time
- change email receiving to accommodate dynamic lists!
