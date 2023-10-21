import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PostEdit.css";

const PostEdit = () => {
  const { postId } = useParams();

  const [post, setPost] = useState({ title: "", body: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5230/api/Post/${postId}` 
        );
        console.log(response.data.data);
        setPost(response.data.data);
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
