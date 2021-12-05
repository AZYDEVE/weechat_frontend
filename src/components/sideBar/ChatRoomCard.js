import React from "react";

const ChatRoomCard = (props) => {
  return (
    <>
      <div style={props.stylings}>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
          {props.cardName}
        </div>
      </div>
    </>
  );
};

export default ChatRoomCard;
