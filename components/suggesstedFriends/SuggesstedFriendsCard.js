import Add from "@/components/icons/Add";
import Profile from "@/components/icons/Profile";

const SuggesstedFriendsCard = ({ name, job }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-x-3 items-center">
        <Profile />
        <div>
          <h1 className="text-black-90 text-sm">{name}</h1>
          <h2 className="text-black-80 text-xs">{job}</h2>
        </div>
      </div>
      <Add />
    </div>
  );
};

export default SuggesstedFriendsCard;
