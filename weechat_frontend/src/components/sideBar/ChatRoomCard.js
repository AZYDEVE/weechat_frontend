import React from "react";

const ChatRoomCard = ({
  selectChatRoom,
  stylings,
  chatRoom,
  activeChatRoom,
}) => {
  const handleChatRoomClick = () => {
    selectChatRoom(chatRoom.Id);
  };

  const handleBackGroundColor = () => {
    if (chatRoom.Id === activeChatRoom) {
      stylings["backgroundColor"] = "#ECECEC";
      return stylings;
    } else {
      return stylings;
    }
  };

  return (
    <>
      <div style={handleBackGroundColor()} onClick={handleChatRoomClick}>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}>
          {chatRoom.name}
        </div>
      </div>
    </>
  );
};

export default ChatRoomCard;
