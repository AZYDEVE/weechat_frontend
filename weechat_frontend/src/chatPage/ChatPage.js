import React, { useState, useEffect } from "react";
import SideBar from "../components/sideBar/ChatRoomSideBar";
import ChatRoom from "../components/chatRoom/ChatRoom";
import useAuthInfo from "../utils/userUtil";
import OpenSocket from "../utils/webSocket";
import "./chatPage.css";

const ChatPage = () => {
  const ws = OpenSocket();
  const [listOfChatRoom, setListOfChatRoom] = useState([]);
  const [chatRoomID, setChatRoomID] = useState("");

  const listOfChatRoomObj = [
    { name: "chatroom A", Id: "A1" },
    { name: "chatroom B", Id: "B1" },
    { name: "chatroom C", Id: "C1" },
  ]; // delete: temp for testing

  const userInfo = useAuthInfo();

  useEffect(() => {
    if (userInfo.user_id !== "") {
      setListOfChatRoom(listOfChatRoomObj);
    }
  }, [userInfo]);

  const getListOfChatRooms = () => {
    //this function is to fetch from server a list of chatRoom associated with the userID
  };

  const selectChatRoom = (chatRoomID) => {
    console.log(chatRoomID);
    setChatRoomID(chatRoomID);
    ws.send(chatRoomID);
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
        <ChatRoom className="chatroom" activeChatRoom={chatRoomID} ws={ws} />
      </div>
    </>
  );
};

export default ChatPage;
