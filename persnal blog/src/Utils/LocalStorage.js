// src/localStorageHelpers.js

// Get posts from localStorage
export const getPostsFromLocalStorage = () => {
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
      return JSON.parse(savedPosts);
    }
    return [];
  };
  
  // Save posts to localStorage
  export const savePostsToLocalStorage = (posts) => {
    localStorage.setItem('posts', JSON.stringify(posts));
  };
  