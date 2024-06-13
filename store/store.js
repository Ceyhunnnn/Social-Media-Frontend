import { configureStore } from "@reduxjs/toolkit";
import dialog from "./dialog";
import globalState from "./globalState";

export const store = configureStore({
  reducer: {
    dialog: dialog,
    globalState: globalState,
  },
});
