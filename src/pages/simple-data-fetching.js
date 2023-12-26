import React, { useState, useEffect } from 'react';

const SimpleDataFetching = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (

    <div className='w-full mt-14 sm:ml-64'>
        <div className='px-8 sm:px-4 pb-8 pt-6'>
        <h1 className="text-4xl font-bold text-black w-fit sm:text-5xl mb-8 w-auto">Simple Data Fetching Example</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {posts.length > 0 && (
        <ul>
          {posts.map(post => (
            <li className="mb-2 p-3 bg-white text-gray-600" key={post.id}>
              <p className="text-xl text-black font-bold capitalize">{post.id}. {post.title}</p>
              <p className="mr-2 text-sm text-gray-600">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
      </div>
    </div>

  );
};

export default SimpleDataFetching;
