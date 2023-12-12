import React, { useState } from "react";

interface CommentFormProps {
  onAddComment: (message: string) => void;
}

const AddPostComment: React.FC<CommentFormProps> = ({ onAddComment }) => {
  const [message, setMessage] = useState("");

  const handleAddComment = async (event: React.FormEvent) => {
    event.preventDefault();
    onAddComment(message);
  };

  return (
    <div className="add-comment-block mb-10 p-8 mt-8 bg-white shadow-2xl">
      <form onSubmit={handleAddComment}>
        {/* <div className="mb-4">
          <label className="comment-block-label">Name</label>
          <input
            type="text"
            className="comment-name block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div> */}
        <label className="comment-block-label">Your comment</label>
        <textarea
          id="body"
          name="body"
          className="comment-message block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <div className="mt-4">
          <button
            type="submit"
            className="px-6 py-2 font-bold text-white bg-blue-500 rounded"
          >
            Add Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPostComment;
