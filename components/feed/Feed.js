import PostCard from "./PostCard";
import ShareCard from "./ShareCard";

const Feed = () => {
  return (
    <div className="w-full flex flex-col gap-y-10 mb-10">
      <ShareCard />
      <PostCard />
    </div>
  );
};

export default Feed;
