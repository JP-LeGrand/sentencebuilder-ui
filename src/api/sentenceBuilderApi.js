import axios from "axios";

const apiUrl = () => {
  let url = "";
  if (window.origin === "http://localhost:3000") {
    url = `http://localhost:3001/`;
  } else {
    url = `https://confident-babbage-ad385a.netlify.app/.netlify/functions/server/`;
  }
  return url;
};

export default axios.create({
  baseURL: apiUrl(),
});
