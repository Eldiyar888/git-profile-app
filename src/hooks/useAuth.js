import { useState } from "react";

export const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem("access_token"));

  const saveToken = (newToken) => {
    localStorage.setItem("access_token", newToken);
    setToken(newToken);
  };

  const clearToken = () => {
    localStorage.removeItem("access_token");
    setToken(null);
  };

  return { token, saveToken, clearToken };
};
