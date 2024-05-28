import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
export const dialogAdapter = createEntityAdapter();

const initialState = dialogAdapter.getInitialState({
  value: null,
});
const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    setDialog(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
