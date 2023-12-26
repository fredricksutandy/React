// PostForm.js
import React, { useState } from 'react';
import Post from './Post';
import ProfileSettings from './SocialProfile';

const PostForm = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');
  const [postText, setPostText] = useState('');

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const addComment = (postId, newComment) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, comments: [...post.comments, newComment] } : post
    );
    setPosts(updatedPosts);
  };

  const handlePostSubmit = () => {
    if (username.trim() !== '' && postText.trim() !== '') {
      const newPost = {
        id: Date.now(),
        username: username,
        text: postText,
        comments: [],
      };
      addPost(newPost);
      setPostText('');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <ProfileSettings onSubmit={(newUsername) => setUsername(newUsername)} />

      <h1 className="text-2xl font-bold mb-4">Social Media App</h1>

      <div className="mb-4 p-4 bg-gray-100 rounded-md">
        <h2 className="text-xl font-bold mb-2">Create a Post</h2>
        <label className="mb-2 block">
          Post:
          <textarea
            className="border border-gray-300 p-2 w-full"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </label>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handlePostSubmit}
        >
          Post
        </button>
      </div>

      {/* Display posts */}
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          addComment={(newComment) => addComment(post.id, newComment)}
          username={username}
          setUsername={setUsername}
        />
      ))}
    </div>
  );
};

export default PostForm;
