const mongoose = require("mongoose");
var DroneSchema = mongoose.Schema({
   serial:{
      type: String
   },
   model:{
      type: String
   },
   weight1: {
      type: Number
   },
   capacity: {
      type:  Number
   }
})
 
var Drone = mongoose.model("drones", DroneSchema) 

module.exports = Drone