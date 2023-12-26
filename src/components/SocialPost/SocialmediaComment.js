// CommentForm.js
import React, { useState } from 'react';

const CommentForm = ({ addComment, username, setUsername }) => {
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = () => {
    if (commentText.trim() !== '') {
      const newComment = {
        id: Date.now(),
        username: username,
        text: commentText,
      };
      addComment(newComment);
      setCommentText('');
    }
  };

  return (
    <div className="flex items-center mt-2">
      <label className="mb-2 block">
        Comment:
        <textarea
          className="border border-gray-300 p-2 w-full"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </label>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
        onClick={handleCommentSubmit}
      >
        Comment
      </button>
    </div>
  );
};

export default CommentForm;
