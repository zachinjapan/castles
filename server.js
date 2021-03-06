// Require Express to run server and routes
const express = require("express");
// make a variable to run express as a function
const app = express();

// Initialize the main project folder
app.use(express.static(__dirname + "/src"));

// choose a port
const PORT = process.env.PORT || 3500;
// use express to listen to that port and run a console log if successful
app.listen(PORT, function () {
  console.log("Server is a runnin on port " + PORT);
});
