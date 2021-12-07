import React from "react";
import "./messageCard.css";

const MessageCard = ({ user, message, time, isCurrentUser }) => {
  return (
    <>
      <div
        className={
          isCurrentUser
            ? "user-msgCard-container"
            : "not-User-msgCard-container"
        }>
        <div
          className={
            isCurrentUser
              ? "user-message-container"
              : "not-user-message-container"
          }>
          <div className="user">{user}</div>
          <div
            className={isCurrentUser ? "user-messages" : "not-user-messages"}>
            {message}

            <div className="time">{time}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageCard;
