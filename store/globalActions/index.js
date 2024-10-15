import { api } from "@/service/api";
import { setDialog } from "../dialog";
import { store } from "../store";
import { setUser, setUserPosts } from "../globalState";

export const getUserDataFromDb = async () => {
  const { response } = await api({ type: "get", url: "/userInformations" });
  store.dispatch(setUser(response?.data));
};

export const setDialogValue = (value) => {
  store.dispatch(setDialog(value));
};

export const getUserPosts = async () => {
  const user = store.getState().globalState.user;
  const { response, error } = await api({
    url: `getUsersPosts/${user?._id}`,
  });
  if (!error) {
    store.dispatch(setUserPosts(response?.data));
  }
};
