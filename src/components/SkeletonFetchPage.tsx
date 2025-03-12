import React, { useState, useEffect } from 'react';

type Post = {
  id: number;
  title: string;
  body: string;
};

function SkeletonFetchPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data: Post[] = await response.json();
      setPosts(data.slice(0, 5)); // Limit to 5 posts for simplicity
      setLoading(false);
    }, 2000); // Simulate loading delay
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Posts with Skeleton</h1>
      {loading ? (
        <div>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              style={{
                background: '#e0e0e0',
                height: '20px',
                marginBottom: '10px',
                width: '100%',
                borderRadius: '4px',
              }}
            ></div>
          ))}
        </div>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SkeletonFetchPage;