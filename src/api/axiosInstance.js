import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/",
  timeout: 3000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");

    if (token) {
      config.headers.Authorization = `token ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
