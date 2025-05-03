import { api } from "./axiosInstance";

export const getUserProfile = async () => {
  const res = await api.get("/user");
  return res;
};

export const updateUserProfile = async (data) => {
  const res = await api.patch("/user", data);
  return res;
};

export const getUsers = async (query, page = 1, perPage = 10) => {
  const res = api.get(`search/users`, {
    params: {
      q: query,
      per_page: perPage,
      page,
    },
  });
  return res;
};
