const sqlite3 = require('sqlite3').verbose()
var http = require('http');
var request = require('request');
const fetch = require("node-fetch");

//path for DB
const DB_PATH = '../domio.db'

//connect to db
const DB = new sqlite3.Database(DB_PATH, function(err){
    if (err) {
        console.log(err)
        return
    }
    console.log('Connected to ' + DB_PATH + ' database.')
});

dbSchema = `CREATE TABLE IF NOT EXISTS prices (
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

//request function, runs every five seconds
var request = setInterval(function() {
  fetch("https://interview.domio.io/properties/", {
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
      sendEmail(element)
    })
    //add to database

  })
}, 5000);

//fake
const log = (data) => {
  console.log(data.id)
}

//insert function
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
        console.log("no error")
      }
  });
}

//send email function
