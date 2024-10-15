import { useEffect, useState } from "react";
import PostCard from "../postCard/PostCard";
import { api } from "@/service/api";
import { useSelector } from "react-redux";
import EmptyCard from "../emptyCard/EmptyCard";
import { getUserPosts } from "@/store/globalActions";

const Profile = () => {
  const { user, userPosts } = useSelector((state) => state.globalState);

  useEffect(() => {
    getUserPosts();
  }, []);
  return (
    <div className="flex flex-col gap-y-8">
      {userPosts &&
        userPosts?.map((post) => (
          <PostCard
            key={post._id}
            id={post._id}
            firstName={post.firstName}
            lastName={post.lastName}
            content={post.content}
            title={post.title}
            date={post.createdAt}
            isUser={post.user === user?._id}
            customFunc={getUserPosts}
          />
        ))}
      {userPosts?.length <= 0 && <EmptyCard desc="No record found yet" />}
    </div>
  );
};

export default Profile;
