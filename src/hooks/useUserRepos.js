import { useState } from "react";
import { api } from "../api/axiosInstance";

export const useUserRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getReposByLogin = async (login) => {
    setLoading(true);
    try {
      const res = await api.get(`users/${login}/repos`);
      setRepos(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    repos,
    loading,
    error,
    getReposByLogin,
  };
};
