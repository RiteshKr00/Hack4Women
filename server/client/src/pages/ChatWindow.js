import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router";

const ChatWindow = ({ socket, username, room }) => {
  console.log(socket);

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [online, setOnline] = useState([]);
  const [update, setUpdate] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };
  console.log(messageList);
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
    socket.on("user_online", (data) => {
      console.log(data);
      setOnline(data);
      console.log(online);
    });
    socket.on("update", (data) => {
      console.log(data);
      setUpdate((list) => [...list, data]);
      console.log(update);
    });
  }, [socket]);

  const messagesListEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesListEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messageList]);
  return (
    <div className="chat-window h-screen ">
      <div className="chat-header border-2">
        <p>Live Chat 🟢</p>
      </div>
      <div className="flex">
        <div className="w-3/4 chat-body overflow-y-auto">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div ref={messagesListEndRef} />
        </div>
        <div className="w-1/4 users ">
          <div className=" bg-pink-200 h-3/4  overflow-y-auto">
            <h1 className="bg-gray-400 text-center">Online Users</h1>
            {online
              ? online.map((user, idx) => {
                  return (
                    <h6 key={idx} className="pl-2 border ">
                      🟢 {user.name}
                    </h6>
                  );
                })
              : ""}
          </div>
          <div className="h-1/4 bg-white overflow-y-auto border-2">
          {update
              ? update.map((upd) => {
                  return <div className="message pl-2">{upd}</div>;
                })
              : ""}
          </div>
          {/* <div className=" chat-body h-1/4  overflow-y-auto">
            {update
              ? update.map((upd) => {
                  return <div className="message">{upd}</div>;
                })
              : ""}{" "}
          </div> */}
        </div>
      </div>
      <div className="chat-footer bg-blue-600">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        {/* <button onClick={sendMessage}>&#9658;</button> */}
        <button className="bg-primary hover:bg-gray-800">&#9658;</button>
      </div>
    </div>
  );
};

export default ChatWindow;
