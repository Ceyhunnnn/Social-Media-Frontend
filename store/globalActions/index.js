import { api } from "@/service/api";
import { setDialog } from "../dialog";
import { store } from "../store";
import { setUser } from "../globalState";
export const getUserDataFromDb = async () => {
  const { response } = await api({ type: "get", url: "/userInformations" });
  store.dispatch(setUser(response?.data));
};
export const setDialogValue = (value) => {
  store.dispatch(setDialog(value));
};
