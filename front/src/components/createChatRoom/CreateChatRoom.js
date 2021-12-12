import React, { useState, useEffect } from "react";
import "./createChatRoom.css";
import getAllUsers from "../../utils/auth0API";
import UserSelect from "./UserSelect";
import Swal from "sweetalert2";
import UseAuthInfo from "../../utils/userUtil";
import { addGroup } from "../../services/relationship_api";

const CreateChatRoom = ({ open, onClose, refreshChatRoom }) => {
  const currentUser = UseAuthInfo();
  const [listOfUsers, SetListOfUsers] = useState("");
  const [friendSelected, setFriendsSelected] = useState([]);
  const [chatRoomName, setChatroomName] = useState("");
  const getUsers = async () => {
    const result = await getAllUsers();

    const users = [];
    for (let obj in result) {
      const user = {
        label: result[obj]["email"],
        value: result[obj],
      };
      users.push(user);
    }
    SetListOfUsers(users);
  };

  useEffect(() => {
    if (listOfUsers === "") {
      getUsers();
    }
  }, []);

  const handleSelectorOnChange = (value) => {
    setFriendsSelected(value);
  };

  const handleChatRoomNameChange = (value) => {
    setChatroomName(value.target.value);
  };

  //  for creating chat room , return a unique chatroom id
  const createChatRoom = async () => {
    if (chatRoomName === " " || friendSelected.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Some fields are empty",
      });
      return;
    }

    // prepare the create chatroom body for sending to backend
    const friendList = [];
    friendList.push(currentUser.email);
    for (let friend in friendSelected) {
      if (friendSelected[friend]["label"] !== currentUser.email) {
        friendList.push(friendSelected[friend]["label"]);
      }
    }

    //
    //this is where getting the unique groupId
    // const uniqueGroupID = Axio.fetch .....
    const result = await addGroup(chatRoomName, friendList);

    if (result.status !== 200) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "something went wrong",
      });
    }

    // maybe delete
    refreshChatRoom();

    onClose();
  };

  if (!open) {
    return null;
  }

  return (
    <>
      <div className="create-chat-container">
        <div className="overlay-container">
          <textarea
            className="chatRoomName"
            placeholder="Create chatroom name"
            value={chatRoomName}
            onChange={handleChatRoomNameChange}
          />
          <div className="selection">
            <UserSelect
              options={listOfUsers}
              onChange={handleSelectorOnChange}
            />
          </div>
          <div className="btn-container">
            <div className="btn-close">
              <button
                onClick={onClose}
                style={{ width: "10vh", height: "5vh" }}>
                Close
              </button>
            </div>
            <div className="btn-create">
              <button
                style={{ width: "10vh", height: "5vh" }}
                onClick={createChatRoom}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateChatRoom;
