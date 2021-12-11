import React, { useState, useEffect } from "react";
import SideBar from "../components/sideBar/ChatRoomSideBar";
import ChatRoom from "../components/chatRoom/ChatRoom";
import useAuthInfo from "../utils/userUtil";
import OpenSocket from "../utils/webSocket";
import { listGroups, getChatRoomHistory } from "../services/relationship_api";
import "./chatPage.css";
import Swal from "sweetalert2";

const ChatPage = () => {
  const ws = OpenSocket();
  const userInfo = useAuthInfo();
  const [listOfChatRoom, setListOfChatRoom] = useState([]);
  const [chatRoomID, setChatRoomID] = useState("");
  const [listOfMessages, setListOfMessages] = useState([]);

  ws.onmessage = function (event) {
    const message = JSON.parse(event.data);

    setListOfMessages((current) => [...current, message]);
  };

  const getListOfChatRooms = async () => {
    //this function is to fetch from server a list of chatRoom associated with the userID

    try {
      const listOfChatRoom = await listGroups(userInfo.email);
      console.log(listOfChatRoom);
      if (listOfChatRoom !== "all_servers_are_down") {
        setListOfChatRoom(listOfChatRoom.data.datas);
      } else {
        warningMessages("Most of the servers are down");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchListOfChatroom = async () => {
      const listOfRoom = await listGroups(userInfo.email);
      console.log(listOfRoom);

      if (listOfRoom !== "all_servers_are_down") {
        setListOfChatRoom(listOfRoom.data.datas);
      } else {
        warningMessages("Most of the servers are down");
      }
    };

    if (userInfo.email !== "") {
      try {
        fetchListOfChatroom();
      } catch (error) {
        console.log(error);
      }
    }
  }, [userInfo]);

  const warningMessages = (message) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
    });
  };

  const selectChatRoom = async (chatRoomID) => {
    setChatRoomID(chatRoomID);
    ws.send(JSON.stringify({ type: "newtopic", body: chatRoomID }));
    setListOfMessages([]);
    //get chat history
    try {
      const chatHistory = await getChatRoomHistory(chatRoomID);

      setListOfMessages(chatHistory["data"]["datas"]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="chatPage_container">
        <SideBar
          className="sideBar"
          listOfChatRoom={listOfChatRoom}
          selectChatRoom={selectChatRoom}
          activeChatRoom={chatRoomID}
          refreshChatRoom={getListOfChatRooms}
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
