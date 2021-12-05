import React from "react";
import Chatcard from "./ChatRoomCard";
import { MdAddBox } from "react-icons/md/";
import "./chatRoomSideBar.css";

const ChatRoomSideBar = () => {
  const listOfChatRoomName = ["chatroom A", "chatroom B", "chatroom C"];

  const getListiOfChatRooms = (listOfchatRoom) => {
    return listOfchatRoom.map((chatRoomName) => (
      <Chatcard
        stylings={{
          height: "60px",
          width: "70%",
          backgroundColor: "#CBC7C8",
          margin: "10px",
          boarder: "1px black",
          borderRadius: "5px",
          boxShadow: "0px 1.5px 3px rgba(0,0,0.18)",
        }}
        cardName={chatRoomName}
      />
    ));
  };

  return (
    <>
      <div className="ChatRoomSideBar">
        <MdAddBox size={60} />

        {getListiOfChatRooms(listOfChatRoomName)}
      </div>
    </>
  );
};
export default ChatRoomSideBar;
