import React, { useState, useEffect } from "react";
import SideBar from "../components/sideBar/ChatRoomSideBar";
import ChatRoom from "../components/chatRoom/ChatRoom";
import useAuthInfo from "../utils/userUtil";
import OpenSocket from "../utils/webSocket";
import { listGroups } from "../services/relationship_api";
import "./chatPage.css";

const ChatPage = () => {
  const ws = OpenSocket();
  const [listOfChatRoom, setListOfChatRoom] = useState([]);
  const [chatRoomID, setChatRoomID] = useState("");
  const [listOfMessages, setListOfMessages] = useState([]);

  ws.onmessage = function (event) {
    const message = JSON.parse(event.data);
    // console.log(message);
    setListOfMessages((current) => [...current, message]);
  };

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
  }, []);

  const getListOfChatRooms = async () => {
    //this function is to fetch from server a list of chatRoom associated with the userID
    const listOfChatRoom = await listGroups({ userId: userInfo.email });
    setListOfChatRoom(listOfChatRoom);
  };

  const selectChatRoom = (chatRoomID) => {
    console.log(chatRoomID);
    setChatRoomID(chatRoomID);
    ws.send(JSON.stringify({ type: "newtopic", body: chatRoomID }));
    setListOfMessages([]);
  };

  const getChatHistory = async () => {};

  const appenNewChatRoom = (newChatRoom) => {
    setListOfChatRoom([...listOfChatRoom, newChatRoom]);
  };

  return (
    <>
      <div className="chatPage_container">
        <SideBar
          className="sideBar"
          listOfChatRoom={listOfChatRoom}
          selectChatRoom={selectChatRoom}
          activeChatRoom={chatRoomID}
          createNewChatRoomFunction={appenNewChatRoom}
        />
        <ChatRoom
          className="chatroom"
          activeChatRoom={chatRoomID}
          ws={ws}
          listOfMessages={listOfMessages}
        />
      </div>
    </>
  );
};

export default ChatPage;
