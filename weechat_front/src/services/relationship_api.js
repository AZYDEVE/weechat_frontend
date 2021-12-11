import axios from "axios";
import { server_urls, mq_ports } from "../Constant/url.js";
import OpenSocket from "../utils/webSocket";

let connectingServer = server_urls[0];
let connectingMqPort = mq_ports[0];

const notifyExpressChangeMqPort = async (port) => {
  const ws = OpenSocket();
  try {
    ws.send({ type: "change_mqport", body: connectingMqPort });
    console.log(connectingMqPort);
  } catch (error) {
    console.log(error);
  }
};

const fetching = async (path, param) => {
  let result = await axios.post(connectingServer + path, param);
  console.log(result);
  if (result.status === 200) {
    return result;
  }

  for (let [index, url] of server_urls.entries()) {
    try {
      result = await axios.post(url + path, param);
      if (result.status === 200) {
        connectingServer = url;
        connectingMqPort = mq_ports[index];
        notifyExpressChangeMqPort(mq_ports[index]);
        return result;
      }
    } catch (error) {
      console.log(error);
      continue;
    }
  }

  return "all servers are down";
};

export const addGroup = async (groupName, userList) => {
  return await fetching(`/dbms/relationship/add`, {
    groupName: groupName,
    userList: userList,
  });
};

export const listGroups = async (userId) => {
  console.log("Call");
  return await fetching(`/dbms/relationship/list`, {
    userId: userId,
  });
};

// need to change the url

export const getChatRoomHistory = async (chatRoomId) => {
  return fetching(`/dbms/message/list`, {
    chatRoomId: chatRoomId,
  });
};

export const sendNewMesage = async (messageInfo) => {
  return fetching(`/dbms/message/add`, messageInfo);
};
