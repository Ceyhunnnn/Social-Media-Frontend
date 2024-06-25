import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
export const dialogAdapter = createEntityAdapter();

const initialState = dialogAdapter.getInitialState({
  user: null,
  users: null,
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
  },
});

export const { setUser, setUsers } = globalStateSlice.actions;
export default globalStateSlice.reducer;
