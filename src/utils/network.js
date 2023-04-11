import config from "../config/default";
import axios from "axios";
import {getUser} from "../state/global";

const SERVER_URL = config.SERVER_URL;
const user = getUser()

export async function postChatRequest(sender, receiver) {
  const data = {sender, receiver};
  const headers = {
    "Content-Type": "application/json",
    "Authorization": 'Bearer ' + user.token
  }
  return axios.post(`${SERVER_URL}/api/chatRequest`, data, {
    headers
  });
}

async function postRegister() {

}

async function postLogin() {
}
