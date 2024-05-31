import axios from "axios";

const instance = axios.create({
  baseURL: "https://vlasovback.ru",
});

export default instance;
