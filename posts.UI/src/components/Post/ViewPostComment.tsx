import { format } from "date-fns";

interface PostCommentProps {
  post: {
    id: number;
    title: string;
    body: string;
    comments: object;
  };
}

const ViewPostComment: React.FC<PostCommentProps> = ({ post }) => {
  return (
    <div className="post-comment p-8 mt-8 bg-white shadow-2xl">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      {Object.entries(post.comments).map(([commentKey, comment], index) => {
        return (
          <div key={index} className="mb-4">
            <h3 className="font-bold">{comment.userName}</h3>
            <div className="post-date">
              {format(new Date(comment.createdAt), "M/d/yyyy")}
            </div>
            <p>Comment: {comment.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ViewPostComment;
