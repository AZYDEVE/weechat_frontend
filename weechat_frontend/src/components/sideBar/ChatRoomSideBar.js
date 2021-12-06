import React from "react";
import Chatcard from "./ChatRoomCard";
import { MdAddBox } from "react-icons/md/";
import "./chatRoomSideBar.css";

const ChatRoomSideBar = ({
  listOfChatRoom,
  selectChatRoom,
  activeChatRoom,
}) => {
  const getListiOfChatRooms = (listOfchatRoom) => {
    return listOfchatRoom.map((chatRoom) => (
      <Chatcard
        stylings={{
          height: "60px",
          width: "70%",
          backgroundColor: "#CBC7C8",
          margin: "10px",
          boarder: "1px black",
          borderRadius: "8px",
          boxShadow: "1px 1.5px 3px rgba(0,0,0.18)",
        }}
        chatRoom={chatRoom}
        selectChatRoom={selectChatRoom}
        activeChatRoom={activeChatRoom}
      />
    ));
  };

  return (
    <>
      <div className="ChatRoomSideBar">
        <MdAddBox size={60} />

        {getListiOfChatRooms(listOfChatRoom)}
      </div>
    </>
  );
};
export default ChatRoomSideBar;
