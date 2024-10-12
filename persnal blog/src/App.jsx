// src/App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPostsFromLocalStorage, savePostsToLocalStorage } from './Utils/LocalStorage.js';
import ViewPosts from './Components/ViewPost';
import CreatePost from './Components/CreatePost';
import PostDetails from './Components/PostDetails';
import EditPost from './Components/EditPost';
import Navbar from './Components/Navbar.jsx';

function App() {
  // Initialize posts from localStorage
  const [posts, setPosts] = useState(getPostsFromLocalStorage());

  // Save posts to localStorage whenever posts state changes
  useEffect(() => {
    savePostsToLocalStorage(posts);
  }, [posts]);

  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<ViewPosts posts={posts} setPosts={setPosts} />} />
        <Route path="/create" element={<CreatePost posts={posts} setPosts={setPosts} />} />
        <Route path="/post/:id" element={<PostDetails posts={posts} setPosts={setPosts} />} />
        <Route path="/edit/:id" element={<EditPost posts={posts} setPosts={setPosts} />} />
      </Routes>
    </Router>
  );
}

export default App;
