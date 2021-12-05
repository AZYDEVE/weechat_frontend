import React from "react";
import SideBar from "../components/sideBar/ChatRoomSideBar";
import ChatRoom from "../components/chatRoom/ChatRoom";
import "./chatPage.css";

const ChatPage = () => {
  return (
    <>
      <div className="chatPage_container">
        <SideBar className="sideBar" />
        <ChatRoom className="chatroom" />
      </div>
    </>
  );
};

export default ChatPage;
