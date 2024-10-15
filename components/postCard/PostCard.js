import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import Dots from "../icons/Dots";
import Like from "../icons/Like";
import Profile from "../icons/Profile";
import moment from "moment";
import { api } from "@/service/api";
import toast from "react-hot-toast";

const PostCard = ({
  firstName,
  lastName,
  content,
  date,
  title,
  isUser,
  id,
  customFunc,
}) => {
  const deletePost = async () => {
    const { response, error } = await api({
      url: `/deleteUserPost/${id}`,
      type: "delete",
    });
    if (error) {
      toast.error(error);
    } else {
      if (customFunc) {
        await customFunc();
      }
      toast.success(response?.message);
    }
  };
  return (
    <div className="w-full bg-white rounded-normal border border-gray-30 px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <Profile />
          <div className="flex flex-col gap-y-1">
            <h1 className="text-black-90 text-sm">
              {firstName} {lastName}
            </h1>
            <h2 className="text-black-80 text-xs">{title}</h2>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 items-end">
          {isUser && (
            <Popover placement="bottom-end">
              <PopoverHandler>
                <button>
                  <Dots className="cursor-pointer" />
                </button>
              </PopoverHandler>
              <PopoverContent className="p-3">
                <div>
                  <button onClick={deletePost} className="text-sm text-red-500">
                    Delete
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          )}
          <p className="text-black-40 text-xs">
            {date && moment(date).format("l")}
          </p>
        </div>
      </div>
      <div className="my-5 text-sm text-black-80">{content}</div>
      <hr className="mt-5" />
      <div className="flex justify-end items-center mt-5">
        <Like />
      </div>
    </div>
  );
};

export default PostCard;
