import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "../conponents/BlogCard";

const BlogPage = () => {
 //all blogs data
  const allBlogs = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDp-uQzaxdHKTBp2-LC1x6DN-z5C_cWgG9k1KwmX5QUPgHip2BvzVdySGaJ4Cw16Liuc&usqp=CAU",
      date: "Aug 1, 2024",
      title: "Exploring Ancient Bagan Temples",
      category: "History",
      description:
        "A journey through the ancient temples of Bagan, exploring their history and significance.",
      author: "By Shune",
    },
    {
      id: 2,
      image:
        "https://www.indochinatour.com/assets/images/myanmar-travel-guide/hpa-an-sunrise1170.jpg",
      date: "Aug 2, 2024",
      title: "Sunrise Over Hpa-An",
      category: "Nature",
      description:
        "Experience the breathtaking sunrise views over the stunning landscape of Hpa-An.",
      author: "By Shune",
    },
    {
      id: 3,
      image:
        "https://chancesfornature.org/wp-content/uploads/2021/11/chances_for_nature_elephant_lake_indawgyi.jpg",
      date: "Aug 3, 2024",
      title: "The Elephant in Burma",
      category: "Nature",
      description:
        "Discover the serene beauty of Indawgyi Lake, one of Burma's largest and most pristine lakes.",
      author: "By Shune",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZc2qhPEexG-Pg9op2n9lsRVfyyJ2PBVdDQ&s",
      date: "Aug 4, 2024",
      title: "The Techinical Team in Burma",
      category: "History",
      description:
        "Explore the sacred Golden Rock and its significance in Burmese culture and religion.",
      author: "By Shune",
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzpMt6d4JS0xzXVz6VJLPEx5NX0QebnMqLmA&s",
      date: "Aug 5, 2024",
      title: "Burma Music",
      category: "Travel",
      description:
        "A guide to exploring the unique floating gardens and local life on Inle Lake.",
      author: "By Shune",
    },
    {
      id: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZpNlrNsN7ct3xUYVlzwGHfBMurHkRj0xg3Hsg4rtBfRni7olc5XjoFpfLHv2tPG6H77s&usqp=CAU",
      date: "Aug 6, 2024",
      title: "A Photographer in Yangon",
      category: "Photography",
      description:
        "Tips and locations for capturing the vibrant cityscape of Yangon.",
      author: "By Shune",
    },
    {
      id: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDp-uQzaxdHKTBp2-LC1x6DN-z5C_cWgG9k1KwmX5QUPgHip2BvzVdySGaJ4Cw16Liuc&usqp=CAU",
      date: "Aug 7, 2024",
      title: "The Ancient Art of Burmese Puppetry",
      category: "History",
      description:
        "An exploration of the traditional art form of Burmese puppetry and its cultural significance.",
      author: "By Shune",
    },
    {
      id: 8,
      image:
        "https://www.indochinatour.com/assets/images/myanmar-travel-guide/hpa-an-sunrise1170.jpg",
      date: "Aug 8, 2024",
      title: "The Vibrant Markets of Mandalay",
      category: "Travel",
      description:
        "A tour through the bustling markets of Mandalay and the unique products they offer.",
      author: "By Shune",
    },
    {
      id: 9,
      image:
        "https://chancesfornature.org/wp-content/uploads/2021/11/chances_for_nature_elephant_lake_indawgyi.jpg",
      date: "Aug 9, 2024",
      title: "The Wildlife of Burma’s Forests",
      category: "Nature",
      description:
        "A look at the diverse wildlife found in Burma's lush forests and conservation efforts.",
      author: "By Shune",
    },
    {
      id: 10,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZc2qhPEexG-Pg9op2n9lsRVfyyJ2PBVdDQ&s",
      date: "Aug 10, 2024",
      title: "The Ancient Temples of Bagan",
      category: "History",
      description:
        "Detailed insights into the history and architecture of Bagan’s ancient temples.",
      author: "By Shune",
    },
    {
      id: 11,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzpMt6d4JS0xzXVz6VJLPEx5NX0QebnMqLmA&s",
      date: "Aug 11, 2024",
      title: "Burmese Cuisine: A Culinary Journey",
      category: "Travel",
      description:
        "A taste of traditional Burmese cuisine and where to find the best local dishes.",
      author: "By Shune",
    },
    {
      id: 12,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZpNlrNsN7ct3xUYVlzwGHfBMurHkRj0xg3Hsg4rtBfRni7olc5XjoFpfLHv2tPG6H77s&usqp=CAU",
      date: "Aug 12, 2024",
      title: "Capturing the Colors of Bagan",
      category: "Photography",
      description:
        "A guide to photographing the colorful landscapes and temples of Bagan.",
      author: "By Shune",
    },
    {
      id: 13,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDp-uQzaxdHKTBp2-LC1x6DN-z5C_cWgG9k1KwmX5QUPgHip2BvzVdySGaJ4Cw16Liuc&usqp=CAU",
      date: "Aug 13, 2024",
      title: "The Beauty of Burmese Traditional Dress",
      category: "History",
      description:
        "An exploration of traditional Burmese clothing and its cultural significance.",
      author: "By Shune",
    },
    {
      id: 14,
      image:
        "https://www.indochinatour.com/assets/images/myanmar-travel-guide/hpa-an-sunrise1170.jpg",
      date: "Aug 14, 2024",
      title: "The Hidden Gems of Burma",
      category: "Travel",
      description:
        "Discover off-the-beaten-path locations and hidden gems in Burma.",
      author: "By Shune",
    },
    {
      id: 15,
      image:
        "https://chancesfornature.org/wp-content/uploads/2021/11/chances_for_nature_elephant_lake_indawgyi.jpg",
      date: "Aug 15, 2024",
      title: "The Majestic Temples of Yangon",
      category: "History",
      description:
        "A tour of the most impressive temples in Yangon and their historical significance.",
      author: "By Shune",
    },
    {
      id: 16,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZc2qhPEexG-Pg9op2n9lsRVfyyJ2PBVdDQ&s",
      date: "Aug 16, 2024",
      title: "Exploring Burma’s Ancient Ruins",
      category: "History",
      description:
        "An in-depth look at ancient ruins scattered across Burma and their historical contexts.",
      author: "By Shune",
    },
    {
      id: 17,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzpMt6d4JS0xzXVz6VJLPEx5NX0QebnMqLmA&s",
      date: "Aug 17, 2024",
      title: "A Journey Through Burmese Street Photography",
      category: "Photography",
      description:
        "Techniques and tips for capturing the essence of Burmese street life through photography.",
      author: "By Shune",
    },
    {
      id: 18,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZpNlrNsN7ct3xUYVlzwGHfBMurHkRj0xg3Hsg4rtBfRni7olc5XjoFpfLHv2tPG6H77s&usqp=CAU",
      date: "Aug 18, 2024",
      title: "Exploring Burma’s Technology Scene",
      category: "Technology",
      description:
        "An overview of the growing technology sector in Burma and its impact on the country.",
      author: "By Shune",
    },
    {
      id: 19,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDp-uQzaxdHKTBp2-LC1x6DN-z5C_cWgG9k1KwmX5QUPgHip2BvzVdySGaJ4Cw16Liuc&usqp=CAU",
      date: "Aug 19, 2024",
      title: "The Cultural Heritage of Burmese Architecture",
      category: "History",
      description:
        "A look into the rich architectural heritage of Burma and its influence on modern designs.",
      author: "By Shune",
    },
    {
      id: 20,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZpNlrNsN7ct3xUYVlzwGHfBMurHkRj0xg3Hsg4rtBfRni7olc5XjoFpfLHv2tPG6H77s&usqp=CAU",
      date: "Aug 20, 2024",
      title: "Tech Innovations in Burmese Startups",
      category: "Technology",
      description:
        "Highlighting innovative tech startups in Burma and their contributions to the tech ecosystem.",
      author: "By Shune",
    },

    
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6; // Number of blogs per page

  const categories = [
    "All",
    "History",
    "Nature",
    "Travel",
    "Photography",
    "Technology",
  ];
  const popularTags = ["Travel", "Nature", "Technology"];
  const popularPosts = [
    "Exploring Ancient Bagan Temples",
    "Sunrise Over Hpa-An",
    "The Tranquility of Indawgyi Lake",
  ];

  const navigate = useNavigate();

  const filteredBlogs =
    selectedCategory === "All"
      ? allBlogs
      : allBlogs.filter((blog) => blog.category === selectedCategory);

  // Calculate the number of pages needed
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  // Get the blogs for the current page
  const displayedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when category changes
  };

  const handlePostClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Banner Section */}
      <div className="flex items-center justify-center bg-bg-banner w-full h-[500px]">
        <div className="py-40 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 pt-8">
            Welcome to Our Blogs
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-snug">
            Dive into a collection of insightful articles, personal stories, and
            expert tips. Discover the beauty and culture of Burma, one blog post
            at a time. Stay informed, inspired, and connected with our latest
            updates and features.
          </p>
        </div>
      </div>

      {/* Categories and Content */}
      <div className="container mx-auto mt-8 flex flex-col lg:flex-row">
        {/* Categories Sidebar */}
        <div className="lg:w-1/4 p-4">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category}
                className={`cursor-pointer hover:bg-yellow-700${
                  selectedCategory === category ? "text-blue-500" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

         {/* Blog Cards */}
         <div className="lg:w-3/4 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                {...blog}
                onClick={() => handlePostClick(blog.id)}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8">
            <button
              className="px-4 py-2 bg-yellow-800 text-white rounded-lg mr-2"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
            <span className="px-4 py-2">
              {currentPage} of {totalPages}
            </span>
            <button
              className="px-4 py-2 bg-yellow-800 text-white rounded-lg ml-2"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>

        {/* Popular Tags and Posts */}
        <div className="lg:w-1/4 p-4 lg:pl-8 mt-8 lg:mt-0">
          <h2 className="text-2xl font-semibold mb-4">Popular Tags</h2>
          <ul className="space-y-2">
            {popularTags.map((tag, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-yellow-700"
                onClick={() => handleCategoryClick(tag)}
              >
                {tag}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-4 mt-8">Popular Posts</h2>
          <ul className="space-y-2">
            {popularPosts.map((post, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-yellow-700"
                onClick={() => handlePostClick(index + 1)} // Assuming post IDs are sequential
              >
                {post}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
