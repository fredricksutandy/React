import React, { useState } from 'react';
import PostForm from '../components/SocialPost/SocialmediaPost';
import Post from '../components/SocialPost/Post.js';

function SocialmediPost() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const addComment = (postId, newComment) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, comments: [...post.comments, newComment] } : post
    );
    setPosts(updatedPosts);
  };
 
  return (
    <div className='w-full mt-14 sm:ml-64'>
        <div className='px-8 sm:px-4 pb-8 pt-6'>
          <h1 className="text-4xl font-bold text-black w-fit sm:text-5xl mb-8 w-auto">Social Media Post</h1>
          <div className="mb-20 bg-white p-8 md:p-10 w-fit flex flex-col w-full w-100 overflow-y-auto">
            {/* Post form */}
            <PostForm addPost={addPost} />

            {/* Display posts */}
            {posts.map((post) => (
              <Post key={post.id} post={post} addComment={(newComment) => addComment(post.id, newComment)} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default SocialmediPost;
