import { useEffect, useState } from "react";
import postService from "../../services/postService";
import { useParams } from "react-router-dom";
import "./styles/PostEdit.css";

const PostEdit = () => {
  const { postId } = useParams();

  const [post, setPost] = useState({ title: "", body: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await postService.getPostById(postId);
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
