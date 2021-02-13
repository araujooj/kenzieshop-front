import axios from "axios";

const api = axios.create({
  baseURL: "https://kenzieshoes.herokuapp.com",
});

export default api;
