const express = require("express");
const app = express();
const socket = require("socket.io");
app.use(express.json()); //repalcement of bodyparser


const server = app.listen(process.env.PORT, () => {
    console.log("Server is runnng at port", process.env.PORT);
  });
