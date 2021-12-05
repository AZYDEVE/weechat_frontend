import React, { useState, useEffect } from "react";
import { FiSend } from "react-icons/fi/";

import "./chatRoom.css";

const ChatRoom = () => {
  const [listOfMessages, setListOfMessages] = useState(null);
  const [inputMessage, setInputMessage] = useState("");

  console.log(inputMessage);
  const clickSend = () => {
    console.log("hello alex");
  };

  const handleInputChanges = (event) => {
    setInputMessage(event.target.value);
  };

  const sendBTNchangeColor = () => {
    return inputMessage !== "" ? { color: "green" } : "";
  };

  return (
    <>
      <div className="chatRoom">
        <div className="messageDisplay"></div>
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
