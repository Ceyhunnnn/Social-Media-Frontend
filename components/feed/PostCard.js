import Dots from "../icons/Dots";
import Like from "../icons/Like";
import Profile from "../icons/Profile";

const PostCard = () => {
  return (
    <div className="w-full bg-white rounded-normal border border-gray-30 px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <Profile />
          <div className="flex flex-col gap-y-1">
            <h1 className="text-black-90 text-sm">Bessie Cooper</h1>
            <h2 className="text-black-80 text-xs">Digital Marketer</h2>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 items-end">
          <Dots />
          <p className="text-black-40 text-xs">7 hours ago</p>
        </div>
      </div>
      <div className="my-5 text-sm text-black-80">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </div>
      <hr className="mt-5" />
      <div className="flex justify-end items-center mt-5">
        <Like />
      </div>
    </div>
  );
};

export default PostCard;
