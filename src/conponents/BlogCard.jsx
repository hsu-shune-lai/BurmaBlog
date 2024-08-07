import React from 'react';
import { FaComment, FaShare } from 'react-icons/fa';

const BlogCard = ({ image, date, title, description, author, onClick }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer flex flex-col h-full" onClick={onClick}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <span className="block text-gray-400 text-sm mb-2">{date}</span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4 flex-grow line-clamp-3">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="text-gray-800">{author}</div>
          <div className="flex space-x-2 text-gray-400">
            <button aria-label="Comment" className="hover:text-gray-800">
              <FaComment />
            </button>
            <button aria-label="Share" className="hover:text-gray-800">
              <FaShare />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
