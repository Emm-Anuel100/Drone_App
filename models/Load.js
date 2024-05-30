const mongoose = require("mongoose");
var DroneSchema = mongoose.Schema({
   dronename:{
      type: String
   },
   weight:{
      type: Number
   },
   code: {
      type: String
   }
})
 
var Load = mongoose.model("Load_Drone", DroneSchema) // [Load_Drone] name of collection 

module.exports = Load