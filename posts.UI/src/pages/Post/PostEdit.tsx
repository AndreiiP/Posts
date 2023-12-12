import React, { useEffect, useState } from "react";
import postService from "@/services/postService";
import { useParams } from "react-router-dom";
import "./styles/PostEdit.css";
import ViewPostComment from "@/components/Post/ViewPostComment";
import AddPostComment from "@/components/Post/AddPostComment";
import { useAuth } from "@/contexts/AuthContext";
import commentService from "@/services/commentService";

interface PostData {
  id: number;
  title: string;
  body: string;
  comments: object;
}

const PostEdit: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { postId } = useParams<{ postId: string }>();

  const [post, setPost] = useState<PostData>({
    id: 0,
    title: "",
    body: "",
    comments: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await postService.getPostById(Number(postId));
        console.log(postData);

        setPost(postData);
      } catch (error) {
        throw error;
      }
    };

    fetchData();
  }, [postId, isAuthenticated]);

  const handleAddComment = async (message: string) => {
    const commentData = await commentService.addComment(
      Number(postId),
      message
    );

    setPost((prevPost) => {
      return {
        ...prevPost,
        comments: {
          ...prevPost.comments,
          [commentData.id]: {
            message: commentData.message,
            createdAt: commentData.createdAt,
            userName: commentData.userName,
          },
        },
      };
    });
  };

  return (
    <>
      <div className="main-post-container">
        <div className="post-title">{post.title}</div>
        <div className="post-container">
          <img src="/car1.jpg" alt="Post" className="post-image-edit" />
        </div>
        <div className="post-body">{post.body}</div>
      </div>

      {isAuthenticated && <AddPostComment onAddComment={handleAddComment} />}

      {post && post.comments && Object.keys(post.comments).length > 0 && (
        <ViewPostComment post={post} />
      )}
    </>
  );
};

export default PostEdit;
