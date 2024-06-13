import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
export const dialogAdapter = createEntityAdapter();

const initialState = dialogAdapter.getInitialState({
  user: null,
});
const globalStateSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = globalStateSlice.actions;
export default globalStateSlice.reducer;
