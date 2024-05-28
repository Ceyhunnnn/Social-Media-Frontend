import { setDialog } from ".";
import { store } from "../store";

export const setDialogValue = (value) => {
  store.dispatch(setDialog(value));
};
