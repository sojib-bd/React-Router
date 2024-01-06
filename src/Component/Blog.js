// BlogPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.css'

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Exploring the Power of React Router',
      description: 'Discover the seamless navigation and dynamic routing capabilities offered by React Router for building modern Single Page Applications (SPAs).',
    },
    {
      id: 2,
      title: 'Building Responsive UIs with Flexbox and Grid',
      description: 'Learn how to create flexible and responsive user interfaces using CSS Flexbox and Grid layout techniques to enhance your web development skills.',
    },
    {
      id: 3,
      title: 'The Art of State Management in React',
      description: 'Delve into various state management approaches in React, from local component state to global state using tools like Redux, to optimize your application architecture.',
    },
  ];

  return (
    <div className="blogPage">
      <h2>Latest Blog Posts</h2>

      {blogPosts.map(post => (
        <div key={post.id} className="blogPost">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <Link to={`/blog/${post.id}`} className="readMoreLink">Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
