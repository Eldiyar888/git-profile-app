import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserRepos } from "../api/reposApi";

const initialState = {
  publicRepos: [],
  privateRepos: [],
  loading: false,
  error: null,
};

export const fetchRepos = createAsyncThunk(
  "repos/fetchRepos",
  async (visibility, { rejectWithValue }) => {
    try {
      const res = await getUserRepos(visibility);
      return { visibility, data: res.data };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const repoSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.visibility === "public") {
          state.publicRepos = action.payload.data;
        } else if (action.payload.visibility === "private") {
          state.privateRepos = action.payload.data;
        }
      })
      .addCase(fetchRepos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default repoSlice.reducer;
