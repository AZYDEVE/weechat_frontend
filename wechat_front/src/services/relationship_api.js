import axios from "axios";
import { url } from "../Constant/url.js";

// https://auth0.com/docs/users/user-search/retrieve-users-with-get-users-endpoint
// this hardcoded api_token will be expired on Dec 17 2021 at noon

export async function addGroup(groupName, userList) {
  return await axios.post(`${url}/dbms/relationship/add`, {
    groupName: groupName,
    userList: userList,
  });
}

export async function listGroups(userId) {
  return await axios.post(`${url}/dbms/relationship/list`, { userId: userId });
}

// need to change the url

export async function getChatRoomHistory(chatRoomId) {
  console.log(chatRoomId);
  return axios.post(`${url}/dbms/message/list`, {
    chatRoomId: chatRoomId,
  });
}

export async function sendNewMesage(messageInfo) {
  return axios
    .post(`${url}/dbms/message/add`, messageInfo)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
}
