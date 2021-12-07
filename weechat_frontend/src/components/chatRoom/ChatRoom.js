import React, { useState, useEffect } from "react";
import { FiSend } from "react-icons/fi/";
import MessageCard from "./MessageCard";
import getUserInfo from "../../utils/userUtil";
import "./chatRoom.css";
import OpenSocket from "../../utils/webSocket";

// const ws = new WebSocket("ws://localhost:3001");

// ws.onopen = function (event) {
//   console.log("socket is connected");
//   ws.send("test");
// };

const ChatRoom = ({ activeChatRoom, ws }) => {
  const userInfo = getUserInfo();
  const [listOfMessages, setListOfMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  ws.onmessage = function (event) {
    const message = JSON.parse(event.data);

    setListOfMessages([...listOfMessages, message]);
  };

  const clickSend = () => {
    console.log("hello alex");
  };

  const handleInputChanges = (event) => {
    setInputMessage(event.target.value);
  };

  const sendBTNchangeColor = () => {
    return inputMessage !== "" ? { color: "green" } : "";
  };

  const displayListOfMessages = () => {
    if (listOfMessages.length !== 0) {
      return listOfMessages.map((message) => {
        console.log(message);
        let isCurrentUser = false;
        if (message.UserID === userInfo.email) {
          isCurrentUser = true;
        }

        return (
          <MessageCard
            user={message.UserID}
            message={message.message}
            time={message.timestamp}
            isCurrentUser={isCurrentUser}
          />
        );
      });
    }
  };

  return (
    <>
      <div className="chatRoom">
        <div className="messageDisplay">{displayListOfMessages()}</div>
        <div clasName="messageInput">
          <textarea
            name="MessageInput"
            className="messsage_inputbox"
            value={inputMessage}
            onChange={handleInputChanges}
          />

          <FiSend
            className="btn-send pointing"
            onClick={clickSend}
            style={sendBTNchangeColor()}
          />
        </div>
      </div>
    </>
  );
};

export default ChatRoom;
