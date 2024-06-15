import PostCard from "../postCard/PostCard";
import ShareCard from "./ShareCard";

const Feed = () => {
  const getFeedPosts = async () => {};
  return (
    <div className="w-[582px] flex flex-col gap-y-10 mb-10">
      <ShareCard />
      <PostCard />
    </div>
  );
};

export default Feed;
