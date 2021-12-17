const express = require("express");
const app = express();
const socket = require("socket.io");
app.use(express.json()); //repalcement of bodyparser
require("dotenv").config();

const server = app.listen(process.env.PORT, () => {
  console.log("Server is runnng at port", process.env.PORT);
});

const io = socket(server);
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("disconnect", () => {
    
    console.log("User Disconnected", socket.id);
  });

});

