var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DoctorSchema = new Schema({
    
        "_id": {
          "$oid": {
            "type": "ObjectId"
          }
        },
        "Name": {
          "type": "String"
        },
        "Expereince": {
          "$numberInt": {
            "type": "String"
          }
        },
        "Degree": {
          "type": [
            "String"
          ]
        },
        "Availability": {
          "type": "String"
        },
        "Charge": {
          "$numberInt": {
            "type": "Date"
          }
        },
        "City": {
          "type": "String"
        },
        "Specialization": {
          "type": [
            "String"
          ]
        }
      
  

    });

module.exports = mongoose.model('Doctor', DoctorSchema);