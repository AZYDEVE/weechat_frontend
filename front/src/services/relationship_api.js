import axios from "axios";
import { server_urls, mq_ports } from "../Constant/url.js";
import OpenSocket from "../utils/webSocket";

let connectingServer = server_urls[0];
let connectingMqPort = mq_ports[0];
const ws = OpenSocket();
const notifyExpressChangeMqPort = async (port) => {
  try {
    ws.send(JSON.stringify({ type: "change_mqport", body: connectingMqPort }));
    console.log(connectingMqPort);
  } catch (error) {
    console.log(error);
  }
};

// if one server fails, try each of the other 4 servers, if all failed, return client "all server failed"
const fetching = async (path, param) => {
  try {
    let result = await axios.post(connectingServer + path, param);

    if (result.status === 200) {
      return result;
    } else {
      throw new Error(result.status);
    }
  } catch (error) {
    for (let [index, url] of server_urls.entries()) {
      connectingServer = url;
      connectingMqPort = mq_ports[index];
      console.log(connectingMqPort);
      notifyExpressChangeMqPort(mq_ports[index]);
      try {
        let result = await axios.post(url + path, param);
        if (result.status === 200) {
          return result;
        } else {
          throw new Error(result.status);
        }
      } catch (error) {
        console.log(error);
        continue;
      }
    }
  }

  return "all_servers_are_down";
};

export const addGroup = async (groupName, userList) => {
  return await fetching(`/dbms/relationship/add`, {
    groupName: groupName,
    userList: userList,
  });
};

export const listGroups = async (userId) => {
  return await fetching(`/dbms/relationship/list`, {
    userId: userId,
  });
};

// need to change the url

export const getChatRoomHistory = async (chatRoomId) => {
  return await fetching(`/dbms/message/list`, {
    chatRoomId: chatRoomId,
  });
};

export const sendNewMesage = async (messageInfo) => {
  return await fetching(`/dbms/message/add`, messageInfo);
};
