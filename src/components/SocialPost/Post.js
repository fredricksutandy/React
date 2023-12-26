// Post.js
import React from 'react';
import CommentForm from './SocialmediaComment';

const Post = ({ post, addComment, username, setUsername }) => {
  return (
    <div className="mb-4 p-4 bg-gray-100 rounded-md">
      <p className="font-bold">{post.username}</p>
      <p className="text-gray-600">{post.text}</p>

      {/* Display comments */}
      {post.comments.map((comment) => (
        <div key={comment.id} className="text-gray-500 mt-2">
          <span className="font-bold">{comment.username}: </span>
          {comment.text}
        </div>
      ))}

      {/* Comment form */}
      <CommentForm addComment={addComment} username={username} setUsername={setUsername} />
    </div>
  );
};

export default Post;
