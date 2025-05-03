import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice";
import reposReducer from "./reposSlice";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    repos: reposReducer,
  },
});
