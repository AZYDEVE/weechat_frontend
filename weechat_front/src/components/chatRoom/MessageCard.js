import React from "react";
import "./messageCard.css";
import Moment from "moment";

const MessageCard = ({ user, message, time, isCurrentUser }) => {
  const convertMiliSecondToTime = () => {
    return Moment(time).format("MM-DD hh:mm:ss a");
  };

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

            <div className="time">{convertMiliSecondToTime()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageCard;
