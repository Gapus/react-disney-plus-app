import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "66d4b307c879c46999568d75073c9b55",
    language: "ko-KR",
  },
});

export default instance;
