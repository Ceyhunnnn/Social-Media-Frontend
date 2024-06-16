import { api } from "@/service/api";
import PostCard from "../postCard/PostCard";
import ShareCard from "./ShareCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Feed = () => {
  const { user } = useSelector((state) => state.globalState);

  const [topPosts, setTopPosts] = useState(null);
  const getFeedPosts = async () => {
    const { response, error } = await api({ url: "getTopPosts" });
    setTopPosts(response?.data);
    console.log(response?.data);
  };
  useEffect(() => {
    getFeedPosts();
  }, []);
  return (
    <div className="w-[582px] flex flex-col gap-y-10 mb-10">
      <ShareCard />
      {topPosts &&
        topPosts?.map((top) => (
          <PostCard
            key={top._id}
            firstName={top.firstName}
            lastName={top.lastName}
            content={top.content}
            title={top.title}
            date={top.createdAt}
            isUser={top.userId === user?._id}
          />
        ))}
    </div>
  );
};

export default Feed;
