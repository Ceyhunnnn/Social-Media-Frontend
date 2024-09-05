import { api } from "@/service/api";
import PostCard from "../postCard/PostCard";
import ShareCard from "./ShareCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const socketUrl = process.env.API_SOCKET_URL;
const Feed = () => {
  const { user } = useSelector((state) => state.globalState);
  const [topPosts, setTopPosts] = useState(null);

  useEffect(() => {
    const socket = io(socketUrl);
    socket.on("postData", (arg) => {
      setTopPosts(arg);
    });
    socket.on("createPost", (arg) => {
      setTopPosts(arg);
    });
    socket.on("deletedPostData", (arg) => {
      setTopPosts(arg);
    });

    return () => {
      socket.disconnect();
      socket.off("postData");
      socket.off("createPost");
      socket.off("deletedPostData");
    };
  }, []);
  console.log(topPosts);
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
