const sqlite3 = require('sqlite3').verbose()
const fetch = require("node-fetch");
const emailModule = require('./src/email.js')
require('dotenv').config()

//connect to DB
const DB = new sqlite3.Database(process.env.DB_PATH, function(err){
    if (err) {
        console.log(err)
        return
    }
    console.log('Connected to ' + ' database.')
});

//dbSchema
const dbSchema = `CREATE TABLE IF NOT EXISTS prices (
          id TEXT NOT NULL,
          type TEXT NOT NULL,
          dynamicDisplayPrice REAL NOT NULL,
          basePrice REAL NOT NULL,
          priceDatetime TEXT NOT NULL
        );`


//create table if it doesn't exist
DB.exec(dbSchema, function(err){
    if (err) {
        console.log(err)
    }
});

/*request:
  every five seconds retrieves data from API, adds data to domio.db,
  and sends email if necessary
*/
var request = setInterval(function() {
  fetch(process.env.DOMIO_API, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    JSON.parse(data).properties.forEach(function(element) {
      insert(element)
      emailModule.sendEmail(element)
    })
  })
}, 5000);

/* insert
  parameters:
    data: property object
    time: datetime
  returns:
    null: inserts row into domio.db
*/
const insert = (data, time=Date.now()) => {
  const insertString = `INSERT INTO prices(id, type, dynamicDisplayPrice, basePrice, priceDatetime) VALUES
  (?, ?, ?, ?, ?)`
  DB.run(insertString,
    [data.id, data.type, data.dynamicDisplayPrice, data.basePrice, time],
    (err) => {
      if(err) {
    		return console.log(err.message);
  	}
      else {
        console.log(`inserted ${data.id} into DB`)
      }
  });
}
