import SuggesstedFriendsList from "./SuggesstedFriendsList";

const SuggesstedFriends = () => {
  return (
    <div className="border border-gray-30 flex flex-col gap-y-3 rounded-normal px-8 py-6 bg-white">
      <h5 className="text-black-90 text-base">Suggessted Friends</h5>
      <hr />
      <SuggesstedFriendsList />
    </div>
  );
};

export default SuggesstedFriends;
