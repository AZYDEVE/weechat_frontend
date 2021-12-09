import React, { useState, useEffect } from "react";
import { FiSend } from "react-icons/fi/";
import MessageCard from "./MessageCard";
import getUserInfo from "../../utils/userUtil";
import { sendNewMesage } from "../../services/relationship_api";
import "./chatRoom.css";

// const ws = new WebSocket("ws://localhost:3001");

// ws.onopen = function (event) {
//   console.log("socket is connected");
//   ws.send("test");
// };

const ChatRoom = ({ activeChatRoom, listOfMessages }) => {
  const userInfo = getUserInfo();

  const [inputMessage, setInputMessage] = useState("");

  // send new message the server
  const clickSend = () => {
    if (inputMessage === "") {
      console.log("message is empty");
      return;
    }

    console.log(userInfo);
    const messageInfo = {
      groudId: activeChatRoom,
      senderId: userInfo.email,
      message: inputMessage,
    };
    sendNewMesage(messageInfo);
  };

  const handleInputChanges = (event) => {
    setInputMessage(event.target.value);
  };

  const sendBTNchangeColor = () => {
    return inputMessage !== "" ? { color: "green" } : "";
  };

  const displayListOfMessages = () => {
    console.log(listOfMessages.length);

    if (listOfMessages.length !== 0) {
      return listOfMessages.map((message) => {
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
