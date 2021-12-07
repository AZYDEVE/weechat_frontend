import React from "react";
import "./messageCard.css";

const MessageCard = ({ user, message, time, isCurrentUser }) => {
  return (
    <>
      <div
        className={
          isCurrentUser
            ? "User-msgCard-container"
            : "not-User-msgCard-container"
        }>
        <div className="user-message-container">
          <div className="user">{user}</div>
          <div className="messages">{message}</div>
        </div>
        <div className="time">{time}</div>
      </div>
    </>
  );
};

export default MessageCard;
