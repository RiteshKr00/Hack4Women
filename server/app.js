const express = require("express");
const app = express();
const socket = require("socket.io");
require("dotenv").config();
const path = require("path");
const { user_joined, c_users, user_Disconnect } = require("./onlineUser");

app.use(express.json()); //repalcement of bodyparser
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const server = app.listen(process.env.PORT, () => {
  console.log("Server is runnng at port", process.env.PORT);
});

const io = socket(server);
io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data.room);
    console.log(
      `User with ID: ${socket.id} joined room: ${data.room} Name: ${data.author}`
    );
    const online_user = user_joined(socket.id, data.author, data.room);

    // //for particular room  including sender
    io.in(data.room).emit("user_online", online_user);
    io.in(data.room).emit("update", `${data.author} joined chat`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("alluser" + c_users);
    const left = user_Disconnect(socket.id);
    if (left) {
      const room = left[0].room;
      console.log(
        `User with ID: ${socket.id} left room: ${left[0].room} Name: ${left[0].name}`
      );
      console.log(c_users);
      io.in(room).emit("user_online", c_users);
      io.in(room).emit("update", `${left[0].name} left chat`);
    }
    console.log("User Disconnected", socket.id);
  });
});
