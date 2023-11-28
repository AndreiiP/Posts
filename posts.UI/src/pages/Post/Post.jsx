import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Post = ({ post }) => {
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

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    commentCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default Post;
