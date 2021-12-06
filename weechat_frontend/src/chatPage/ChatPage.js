import React, { useState, useEffect } from "react";
import SideBar from "../components/sideBar/ChatRoomSideBar";
import ChatRoom from "../components/chatRoom/ChatRoom";
import "./chatPage.css";

const ChatPage = () => {
  const [userID, setUserID] = useState("");
  const [listOfChatRoom, setListOfChatRoom] = useState([]);
  const [chatRoomID, setChatRoomID] = useState("");

  const listOfChatRoomObj = [
    { name: "chatroom A", Id: "A1" },
    { name: "chatroom B", Id: "B1" },
    { name: "chatroom C", Id: "C1" },
  ]; // delete: temp for testing

  useEffect(() => {
    setListOfChatRoom(listOfChatRoomObj);
  }, []);

  const getListOfChatRooms = () => {
    //this function is to fetch from server a list of chatRoom associated with the userID
  };

  const selectChatRoom = (chatRoomID) => {
    console.log(chatRoomID);
    setChatRoomID(chatRoomID);
  };

  return (
    <>
      <div className="chatPage_container">
        <SideBar
          className="sideBar"
          listOfChatRoom={listOfChatRoom}
          selectChatRoom={selectChatRoom}
          activeChatRoom={chatRoomID}
        />
        <ChatRoom className="chatroom" />
      </div>
    </>
  );
};

export default ChatPage;
