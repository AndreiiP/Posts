import React from "react";
import { Link } from "react-router-dom";

interface PostProps {
  post: {
    id: number;
    title: string;
    commentCount: number;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="post-item">
      <Link to={`/post/${post.id}`} className="post-a-image">
        <img src="/car1.jpg" alt="Post" className="post-image" />
      </Link>
      <div className="post-info">
        <p>{post.title}</p>
        <div className="post-meta">
          <div className="post-date">16.10.2023</div>
          <div className="post-comments">
            <div className="post-comments-icon">
              <span className="icon"></span>
            </div>
            <div className="post-comments-count">{post.commentCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
