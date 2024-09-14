import { socket } from "@/utils/socket";
import PostCard from "../postCard/PostCard";
import ShareCard from "./ShareCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Feed = () => {
  const { user } = useSelector((state) => state.globalState);
  const [topPosts, setTopPosts] = useState(null);

  useEffect(() => {
    socket.emit("getPost");
    socket.on("postData", (arg) => {
      setTopPosts(arg);
    });
  }, []);
  return (
    <div className="w-[582px] flex flex-col gap-y-10 mb-10">
      <ShareCard />
      {topPosts &&
        topPosts?.map((top) => (
          <PostCard
            key={top._id}
            id={top._id}
            firstName={top.user.firstName}
            lastName={top.user.lastName}
            content={top.content}
            title={top.user.title}
            date={top.createdAt}
            isUser={top.user._id === user?._id}
          />
        ))}
    </div>
  );
};

export default Feed;
