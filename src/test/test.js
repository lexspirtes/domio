var assert = require('assert');
var emailFunctions = require('../email.js')


describe('Checks if Property is Valid to send email', function() {
  describe('meetsRequirements', function() {
    it('home1 should return false', function() {
   assert.equal(false, emailFunctions.meetsRequirements(home1));
    });
    it('home2 should return true', function() {
    assert.equal(true, emailFunctions.meetsRequirements(home2));
    });
    it('apt1 should return false', function() {
    assert.equal(false, emailFunctions.meetsRequirements(apt1));
    });
    it('apt2 should return true', function() {
    assert.equal(true, emailFunctions.meetsRequirements(home2));
    });
  });
});


//test constants
const home1 = {
     "address": "1 Castle Ave",
     "basePrice": 6000.06,
     "bathrooms": 10.0,
     "bedrooms": 20.0,
     "city": "Citadel One",
     "description": "Romantic hideaway! This property has the lush beauty and privacy of Hana, without the drive! Only 15-20 minutes to the airport, 10 minutes to beaches, 2 minutes to restaurants and shops...on a private gated property with organic nursery. BEAUTIFUL!",
     "displayPictureUrl": "https://i.imgur.com/0700J1K.jpg",
     "dynamicDisplayPrice": 5975.06,
     "id": "410e409f-ac02-4afb-bbbe-8b7ff708647f",
     "occupancyRate": 0.6,
     "ownerId": "b7f065af-a43a-45ee-acff-bfa6757abf74",
     "state": "Casterly Rock",
     "totalRevenue": 10000.1,
     "type": "home"
   }

const home2 = {
     "address": "Round Home Alley",
     "basePrice": 50.56,
     "bathrooms": 1.0,
     "bedrooms": 1.0,
     "city": "Farhook",
     "description": "Porta 33 PENTHOUSE is a recently remodelled Duplex, inserted in the most privileged areas of Porto. It is situated in Rua das Flores, in the historical centre of Porto an area classified as Worlds heritage.",
     "displayPictureUrl": "https://i.imgur.com/MXjhCKZ.jpg",
     "dynamicDisplayPrice": 50.57,
     "id": "a02968b4-6608-4c15-a980-09cdb1c9c914",
     "occupancyRate": 0.5,
     "ownerId": "b7f065af-a43a-45ee-acff-bfa6757abf74",
     "state": "New York",
     "totalRevenue": 101.12,
     "type": "home"
   }

const apt1 = {
  "address": "P. Sherman 42 Wallaby Way",
  "basePrice": 2311.55,
  "bathrooms": 1.5,
  "bedrooms": 2.0,
  "city": "Sidney",
  "description": "Its the perfect place if you like nature. You can stay under an olive tree reading a good book, you can have a walk in the small country streets or go to the nearest beaches.",
  "displayPictureUrl": "https://i.imgur.com/PU1b0sA.jpg",
  "dynamicDisplayPrice": 2386.55,
  "id": "ffae9d3a-7925-4ea3-af25-4bac5c2fd19b",
  "occupancyRate": 0.77,
  "ownerId": "e34e507a-9663-4c17-b0dd-a2ea164bd33f",
  "state": "Florida",
  "totalRevenue": 3002.01,
  "type": "apartment"
}

const apt2 = {
  "address": "533-1 Otsu",
  "basePrice": 675.0,
  "bathrooms": 1.0,
  "bedrooms": 2.0,
  "city": "Ibaragabasama",
  "description": "We at Outlandish Holidays have a variety of magical holiday experiences for you. From our treehouse to a fairytale cabin. We are close to the sea and the area offers masses of things to do.",
  "displayPictureUrl": "https://i.imgur.com/rb4cx4D.jpg",
  "dynamicDisplayPrice": 600.0,
  "id": "a07e8017-0b2f-4924-8df5-39f89766173d",
  "occupancyRate": 0.9,
  "ownerId": "b586b52a-c86a-40aa-9dec-0d2accb7e8cb",
  "state": "Nagakute",
  "totalRevenue": 750.0,
  "type": "apartment"
}
