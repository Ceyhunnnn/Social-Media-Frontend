import { useSelector } from "react-redux";
import SuggesstedFriendsCard from "./SuggesstedFriendsCard";
import { useEffect } from "react";
import { api } from "@/service/api";
import { useDispatch } from "react-redux";
import { setUsers } from "@/store/globalState";

const SuggesstedFriendsList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state?.globalState);

  const getSuggesstedUsers = async () => {
    const { response } = await api({
      type: "get",
      url: "/getSuggesstedFriends",
    });
    dispatch(setUsers(response?.data));
  };
  useEffect(() => {
    if (!users) {
      getSuggesstedUsers();
    }
  }, []);
  return (
    <div className="flex flex-col gap-y-3">
      {users &&
        users.map((sug) => (
          <SuggesstedFriendsCard
            key={sug._id}
            name={sug.firstName + " " + sug.lastName}
            job={sug.title}
          />
        ))}
    </div>
  );
};

export default SuggesstedFriendsList;
