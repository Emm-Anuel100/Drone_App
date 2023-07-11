
const express = require("express")
const mongoose = require("mongoose")
var Drone = require("./models/Drone")
var Load = require("./models/Load")
const app = express()

// connecting to the database
mongoose.connect("mongodb://127.0.0.1/Drone").then(function(){ // [then] method checking connection  can also use [sinkawait method]
   console.log("database connected succesfully");
}).catch(function(error){
   console.log(error);
})

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true})); 


app.get("/",async function(require,response){ // fetching from the database
 var drone =  await Drone.find({})
 var load =  await Load.find({})
 response.render("index", {title: "Drones", drone:drone, load:load})
})

app.get("/Register", function(request,response) {
   response.render("Register_drone.ejs")
})

app.get("/Load", function(request,response) {
   response.render("Loaddrone.ejs")
})


app.post("/Drone", function (request,response) { // a post middle ware
  var drone = new Drone()
  drone.serial = request.body.serial
  drone.model = request.body.model
  drone.weight1 = request.body.weight1
  drone.capacity = request.body.capacity
  drone.save()
  response.redirect("/")

})


app.post("/Load", function (request,response) { // a post middle ware
   var load = new Load()
   load.dronename = request.body.dronename
   load.weight = request.body.weight
   load.code = request.body.code
   load.save()
   response.redirect("/")
 
 })


var port = 7000;

app.listen(port, function(){
   console.log("my app is running at port "+ port);
})

