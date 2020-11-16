import axios from "axios";

export const api = axios.create({
  baseURL: "https://cybersoft-vexere-api.herokuapp.com/api",
});
