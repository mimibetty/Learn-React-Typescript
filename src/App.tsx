// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.tsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App


// // Learn Fetch data
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // type Post = {
// //   id: number;
// //   title: string;
// //   body: string;
// // };

// // function App() {
// //   const [posts, setPosts] = useState<Post[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     const fetchPosts = async () => {
// //       try {
// //         const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts', { });
// //         setPosts(response.data);
// //       } catch (err: any) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchPosts();
// //   }, []);

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h1>Posts</h1>
// //       {loading && <p>Loading...</p>}
// //       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
// //       <ul>
// //         {posts.map((post) => (
// //           <li key={post.id}>
// //             <h2>{post.title}</h2>
// //             <p>{post.body}</p>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default App;



// // learn skeleton
// import React, { useState, useEffect } from 'react';

// type Post = {
//   id: number;
//   title: string;
//   body: string;
// };

// function App() {
//   const [posts, setPosts] = useState<Post[]>([]); // State to store the posts
//   const [loading, setLoading] = useState<boolean>(true); // State to track if data is loading

//   useEffect(() => {
//     // Simulate data fetching with a delay
//     const fetchPosts = async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const data: Post[] = await response.json();
//       setPosts(data); // Store the fetched posts
//       setLoading(false); // Set loading to false when data is ready
//     };

//     fetchPosts();
//   }, []); // Runs only once when the component mounts

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Posts</h1>

//       {/* Conditional rendering: Show skeleton if loading, otherwise show data */}
//       {loading ? (
//         // Skeleton loader: Gray boxes
//         <div>
//           {[...Array(10)].map((_, index) => (
//             <div
//               key={index}
//               style={{
//                 background: '#e0e0e0',
//                 height: '20px',
//                 marginBottom: '10px',
//                 width: '100%',
//                 borderRadius: '4px',
//               }}
//             ></div>
//           ))}
//         </div>
//       ) : (
//         // Render the actual posts data
//         <ul>
//           {posts.map((post) => (
//             <li key={post.id} style={{ marginBottom: '10px' }}>
//               <h2>{post.title}</h2>
//               <p>{post.body}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import SkeletonFetchPage from './components/SkeletonFetchPage';
// import RandomNumberPage from './components/RandomNumberPage';
// import IncrementPage from './components/IncrementPage';

// function App() {
//   return (
//     <Router>
//       <div style={{ padding: '20px' }}>
//         <h1>React App with Multiple Pages</h1>
//         <nav>
//           <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
//             <li style={{ marginBottom: '10px' }}>
//               <Link to="/">Home</Link>
//             </li>
//             <li style={{ marginBottom: '10px' }}>
//               <Link to="/skeleton">Skeleton Fetch Page</Link>
//             </li>
//             <li style={{ marginBottom: '10px' }}>
//               <Link to="/random-number">Random Number Page</Link>
//             </li>
//             <li style={{ marginBottom: '10px' }}>
//               <Link to="/incrementsss">Increment Page</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<h2>Welcome to the React App!</h2>} />
//           <Route path="/skeleton" element={<SkeletonFetchPage />} />
//           <Route path="/random-number" element={<RandomNumberPage />} />
//           <Route path="/incrementsss" element={<IncrementPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import SkeletonFetchPage from './components/SkeletonFetchPage';
import RandomNumberPage from './components/RandomNumberPage';
import IncrementPage from './components/IncrementPage';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        {/* Include the Navigation Menu Conditionally */}
        <Routes>
          <Route path="/" element={<HomeWithNav />} />
          <Route path="/skeleton" element={<SkeletonFetchPage />} />
          <Route path="/random-number" element={<RandomNumberPage />} />
          <Route path="/increment" element={<IncrementPage />} />
        </Routes>
      </div>
    </Router>
  );
}

// Separate Component for Home Page with Navigation
function HomeWithNav() {
  return (
    <div>
      <h1>Welcome to the React App!</h1>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/skeleton">Skeleton Fetch Page</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/random-number">Random Number Page</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/increment">Increment Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;