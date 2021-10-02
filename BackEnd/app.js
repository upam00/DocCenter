const express = require('express');

const app = express();
const port = process.env.PORT || 5000;


var mongoose = require('mongoose');
var dev_db_url = 'mongodb+srv://nodeuser:u1234pam@alumni.jlyng.mongodb.net/doctorDB?retryWrites=true&w=majority';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

var Doctor = require('./doctor.js');

app.get('/', async function(req, res){

  const findObj = {
    City : req.query.city, 
    Availability : req.query.aval, 
    Specialization : req.query.spcl, 
  }

  if(findObj.City === "" || findObj.City === null)
  {
    delete findObj.City;
  }
  if(findObj.Availability === "" || findObj.Availability === null)
  {
    delete findObj.Availability;
  }
  if(findObj.Specialization === "" || findObj.Specialization === null)
  {
    delete findObj.Specialization;
  }


  const doctors = await Doctor.find({...findObj});
    
  res.send(doctors);

});



app.listen(port, () => {
  console.log(`Example app listening!`)
});