import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import io from "socket.io-client";
// import ChatWindow from "./ChatWindow";
const socket = io.connect("/");
socket.on("connect", function () {
  console.log(socket.id);
});
const Chatroom = () => {
  // const history = useHistory();
  console.log(socket);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("global");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "") {
      const Data = {
        room: room,
        author: username,
      };
    //   
    } else {
      alert("username is must !");
    }
  };
  return (
    <div className="w-full h-screen">
      {" "}
      <div className="text-3xl text-white font-extralight ml-40 pt-8 ">
        Chatroom{" "}
      </div>
        <div className="flex justify-around mt-16">
          {" "}
          <div className="flex justify-around mt-16">
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="your name"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div
              onClick={() => {
                joinRoom();
                setRoom("global");
              }}
              className="mb-4 rounded w-full text-white text-xl justify-center flex px-2 bg-gray-500 items-center font-medium"
            >
              join Chat ▶
            </div>
          </div>
        </div>
    
    </div>
  );
};

export default Chatroom;


