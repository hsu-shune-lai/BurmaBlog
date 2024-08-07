import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogs from '../data/BlogData'; // Import the centralized blog data

const SingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the blog by ID
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  // Handle case where the blog is not found
  if (!blog) {
    return (
      <div className="p-4">
        <button onClick={() => navigate(-1)} className="text-blue-500 hover:underline">
          &larr; Back
        </button>
        <p className="text-gray-700">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="container mx-auto">
        <button 
          onClick={() => navigate(-1)} 
          className="mb-4 text-blue-500 hover:underline"
        >
          &larr; Back
        </button>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-96 object-cover" 
          />
          <div className="p-6">
            <span className="block text-gray-500 text-sm mb-2">{blog.date}</span>
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-700 mb-4 whitespace-pre-wrap">{blog.description}</p>
            <div className="flex items-center mt-4">
              <span className="text-gray-800 font-semibold">{blog.author}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
