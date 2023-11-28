import { Link } from "react-router-dom";

const NewsList = () => {
  return (
    <div className="post-list">
      <div className="post-item">
        <Link to={`/post/1`} className="post-a-image">
          <img src="/car1.jpg" alt="Post" className="post-image" />
        </Link>
        <div className="post-info">
          <p>text</p>
          <div className="post-meta">
            <div className="post-date">16.10.2023</div>
            <div className="post-comments">
              <div className="post-comments-icon">
                <span className="icon"></span>
              </div>
              <div className="post-comments-count"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
