import React, { useState, useEffect, useRef } from "react";
import { FiSend } from "react-icons/fi/";
import MessageCard from "./MessageCard";
import getUserInfo from "../../utils/userUtil";
import { sendNewMesage } from "../../services/relationship_api";
import "./chatRoom.css";

const ChatRoom = ({ activeChatRoom, listOfMessages }) => {
  const userInfo = getUserInfo();

  const [inputMessage, setInputMessage] = useState("");

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [listOfMessages]);

  // send new message the server
  const clickSend = () => {
    if (inputMessage === "") {
      return;
    }

    const messageInfo = {
      groupId: activeChatRoom,
      senderId: userInfo.email,
      message: inputMessage,
    };
    sendNewMesage(messageInfo);
    setInputMessage("");
  };

  const handleInputChanges = (event) => {
    setInputMessage(event.target.value);
  };

  const sendBTNchangeColor = () => {
    return inputMessage !== "" ? { color: "green" } : "";
  };

  const displayListOfMessages = () => {
    if (listOfMessages.length !== 0) {
      return listOfMessages.map((message, key) => {
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
            key={key}
          />
        );
      });
    } else {
      return <div>Loading..</div>;
    }
  };

  return (
    <>
      <div className="chatRoom">
        <div className="messageDisplay">
          {displayListOfMessages()}
          <div ref={messagesEndRef} />
        </div>
        <div className="messageInput">
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
