import React, { useEffect, useState } from "react";
import postService from "@/services/postService";
import { useParams } from "react-router-dom";
import "./styles/PostEdit.css";

interface PostData {
  title: string;
  body: string;
}

const PostEdit: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<PostData>({ title: "", body: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await postService.getPostById(Number(postId));
        console.log(postData);
        setPost(postData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [postId]);

  return (
    <>
      <div className="post-container">
        <img src="/car1.jpg" alt="Post" className="post-image-edit" />
      </div>
      <div className="post-info-edit">
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export default PostEdit;
