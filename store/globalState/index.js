import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
export const dialogAdapter = createEntityAdapter();

const initialState = dialogAdapter.getInitialState({
  user: null,
  users: null,
  userPosts: [],
});
const globalStateSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
    setUserPosts(state, action) {
      state.userPosts = action.payload;
    },
  },
});

export const { setUser, setUsers, setUserPosts } = globalStateSlice.actions;
export default globalStateSlice.reducer;
