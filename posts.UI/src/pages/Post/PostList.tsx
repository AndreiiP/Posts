import React, { useEffect, useState } from "react";
import postService from "@/services/postService";
import "./styles/PostList.css";
import Post from "./Post";

interface PostData {
  id: number;
  title: string;
  commentCount: number;
}

const PostList: React.FC = () => {
const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await postService.getAllPosts();
        console.log(postsData);
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
