import React, { useState } from "react";
import Chatcard from "./ChatRoomCard";
import { MdAddBox } from "react-icons/md/";
import "./chatRoomSideBar.css";
import CreateChat from "../createChatRoom/CreateChatRoom";

const ChatRoomSideBar = ({
  listOfChatRoom,
  selectChatRoom,
  activeChatRoom,
  createNewChatRoomFunction,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getListOfChatRooms = (listOfchatRoom) => {
      console.log(listOfchatRoom);
      if(listOfchatRoom!==null){
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
    ));}else{
          return (<div>loading...</div>)
      }
  };

  return (
    <>
      <div className="ChatRoomSideBar">
        <MdAddBox size={60} onClick={() => setIsOpen(true)} />
        <CreateChat
          open={isOpen}
          onClose={() => setIsOpen(false)}
          createNewChatRoomFunction={createNewChatRoomFunction}
        />
        {getListOfChatRooms(listOfChatRoom)}
      </div>
    </>
  );
};
export default ChatRoomSideBar;
