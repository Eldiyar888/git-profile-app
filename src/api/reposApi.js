import { api } from "./axiosInstance";

export const getUserRepos = async (visibility = "all") => {
  const res = await api.get(`/user/repos?visibility=${visibility}`);
  return res;
};
