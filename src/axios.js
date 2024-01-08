import axios from "axios";

const instance = axios.create({
  baseURL: "vlasovproductionbackend-production.up.railway.app",
});

export default instance;
