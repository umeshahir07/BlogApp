// src/components/PostDetails.jsx

import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PostDetails = ({ posts }) => {
  const { id } = useParams(); // Get the post ID from URL
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <p>Post not found!</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.date}</p>
      <Link to={"/"}> back to home page</Link>
    </div>
  );
};

export default PostDetails;
