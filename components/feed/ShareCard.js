import Media from "../icons/Media";
import Profile from "../icons/Profile";

const ShareCard = () => {
  return (
    <div className="w-full flex flex-col gap-y-4 bg-white rounded-normal h-[154px] border border-gray-30 px-7 py-5">
      <div className="flex items-start gap-x-4 h-16">
        <Profile width={40} height={40} />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="border-b border-gray-40 placeholder:text-black-30 text-black-30 w-full outline-none pb-5 mt-4"
        />
      </div>
      <div className="flex items-center justify-between pl-14">
        <div className="flex items-center gap-x-2">
          <Media />
          <p className="text-black-80 text-sm">Add Media</p>
        </div>
        <button className="bg-blue-90 text-white text-sm rounded-full flex justify-center items-center w-16 h-8">
          Post
        </button>
      </div>
    </div>
  );
};

export default ShareCard;
