import { useEffect, useState } from "react";
import PostCard from "../postCard/PostCard";
import { api } from "@/service/api";
import { useSelector } from "react-redux";
import EmptyCard from "../emptyCard/EmptyCard";

const Profile = () => {
  const { user } = useSelector((state) => state.globalState);
  const [posts, setPosts] = useState(null);
  const getUserPosts = async () => {
    const { response, error } = await api({
      url: `getUsersPosts/${user?._id}`,
    });
    if (!error) {
      setPosts(response?.data);
    }
  };
  useEffect(() => {
    getUserPosts();
  }, []);
  return (
    <div className="flex flex-col gap-y-8">
      {posts &&
        posts?.map((post) => (
          <PostCard
            key={post._id}
            firstName={post.firstName}
            lastName={post.lastName}
            content={post.content}
            title={post.title}
            date={post.createdAt}
          />
        ))}
      {posts?.length <= 0 && (
        <EmptyCard
          desc="No record found yet
"
        />
      )}
    </div>
  );
};

export default Profile;
