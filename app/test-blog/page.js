// File: components/TestBlog.js
'use client'
import React, { useEffect, useState } from 'react';

async function getBlogs() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error('Cannot fetch blog');
  }

  return response.json();
}

const TestBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">List</h1>
      
        <div>
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white p-4 mb-4 shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-yellow-500">{blog.id}</h3>
              <h3 className="text-xl font-semibold mb-2 text-yellow-500">{blog.title}</h3>
              <p className="text-gray-600">{blog.body}</p>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default TestBlog;
