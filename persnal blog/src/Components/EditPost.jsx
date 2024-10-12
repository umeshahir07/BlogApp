// src/components/EditPost.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = ({ posts, setPosts }) => {
  const { id } = useParams(); // Get the post ID from URL
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // Find the post to edit by ID
    const postToEdit = posts.find((p) => p.id === parseInt(id));
    if (postToEdit) {
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
    }
  }, [id, posts]);

  const handleUpdate = (e) => {
    e.preventDefault();

    // Create updated post object
    const updatedPost = {
      id: parseInt(id),
      title: title,
      content: content,
      date: new Date().toISOString().split('T')[0], // Update the date
    };

    // Update posts array with the new post data
    const updatedPosts = posts.map((post) =>
      post.id === parseInt(id) ? updatedPost : post
    );
    setPosts(updatedPosts);

    // Redirect to the post details page after update
    navigate(`/post/${id}`);
  };

  return (
    <div>
      <h1>Edit Post {id}</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
