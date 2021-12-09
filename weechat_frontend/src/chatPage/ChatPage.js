import React, { useState, useEffect } from "react";
import SideBar from "../components/sideBar/ChatRoomSideBar";
import ChatRoom from "../components/chatRoom/ChatRoom";
import useAuthInfo from "../utils/userUtil";
import OpenSocket from "../utils/webSocket";
import {
  listGroups,
  getChatRoomHistory,
  addGroup,
} from "../services/relationship_api";
import "./chatPage.css";

const ChatPage = () => {
  const ws = OpenSocket();
  const userInfo = useAuthInfo();
  const [listOfChatRoom, setListOfChatRoom] = useState([]);
  const [chatRoomID, setChatRoomID] = useState("");
  const [listOfMessages, setListOfMessages] = useState([]);

  ws.onmessage = function (event) {
    const message = JSON.parse(event.data);
    console.log(message);
    setListOfMessages((current) => [...current, message]);
  };

  const getListOfChatRooms = async () => {
    //this function is to fetch from server a list of chatRoom associated with the userID
    console.log(userInfo.email);
    try {
      const listOfChatRoom = await listGroups(userInfo.email);
      setListOfChatRoom(listOfChatRoom.data.datas);
    } catch (error) {
      console.log(error);
    }
  };

  //example if chatroom json
  const listOfChatRoomObj = [
    { name: "chatroom A", Id: "A1" },
    { name: "chatroom B", Id: "B1" },
    { name: "chatroom C", Id: "C1" },
  ]; // delete: temp for testing

  useEffect(() => {
    console.log(userInfo);
    if (userInfo.email !== "") {
      //  setListOfChatRoom(listOfChatRoomObj);
      try {
        getListOfChatRooms(listOfChatRoomObj);
      } catch (error) {
        console.log(error);
      }
    }
  }, [userInfo]);

  const selectChatRoom = async (chatRoomID) => {
    console.log(chatRoomID);
    setChatRoomID(chatRoomID);
    ws.send(JSON.stringify({ type: "newtopic", body: chatRoomID }));
    setListOfMessages([]);
    //get chat history
    try {
      const chatHistory = await getChatRoomHistory(chatRoomID);
      setListOfMessages(chatHistory);
    } catch (error) {
      console.log(error);
    }
  };

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
