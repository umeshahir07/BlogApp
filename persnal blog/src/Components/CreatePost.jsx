// src/components/CreatePost.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ posts, setPosts }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Please fill in both fields.");
      return;
    }

    const newPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      title,
      content,
      date: new Date().toISOString().split('T')[0],
    };

    setPosts([...posts, newPost]);
    navigate('/');
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl mb-6">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
