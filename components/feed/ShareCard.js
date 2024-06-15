import { api } from "@/service/api";
import Media from "../icons/Media";
import Profile from "../icons/Profile";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const ShareCard = () => {
  const { user } = useSelector((state) => state.globalState);
  const [text, setText] = useState(null);
  const createPost = async () => {
    if (text) {
      const body = {
        userId: user?._id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        title: user?.title,
        content: text,
      };
      const { response, error } = await api({
        url: "createUserPost",
        body,
        type: "post",
      });

      if (!error) {
        toast.success(response?.message);
      } else {
        toast.error(err);
      }
      setText("");
    }
  };
  return (
    <div className="w-full flex flex-col gap-y-4 bg-white rounded-normal h-[154px] border border-gray-30 px-7 py-5">
      <div className="flex items-start gap-x-4 h-16">
        <Profile width={40} height={40} />
        <textarea
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="What's on your mind?"
          className="border-b border-gray-40 placeholder:text-black-30 text-sm text-black-30 w-full outline-none pb-5 mt-4 resize-none"
        />
      </div>
      <div className="flex items-center justify-between pl-14 mt-3 ">
        <div className="flex items-center gap-x-2">
          <Media />
          <p className="text-black-80 text-sm">Add Media</p>
        </div>
        <Button
          disabled={!text}
          type="button"
          onClick={createPost}
          className="bg-blue-90 lowercase   text-white text-sm rounded-full flex justify-center items-center w-12 h-8"
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default ShareCard;
