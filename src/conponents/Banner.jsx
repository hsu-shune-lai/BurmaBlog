import React from "react";
import { Link } from "react-router-dom";
import HomeBanner from "../Images/HomeBanner.webp";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[700px] bg-cover bg-center z-0" // Adjusted height
      style={{
        backgroundImage: `url(${HomeBanner})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6 py-12 z-10">
        {" "}
        {/* Added vertical padding */}
        <h1 className="text-5xl md:text-7xl text-white font-bold mb-6">
          {" "}
          {/* Increased font size */}
          Explore the Beauty of Burma
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl">
          {" "}
          {/* Increased font size and margin */}
          Discover the rich cultural heritage, stunning landscapes, and vibrant
          traditions of Burma.
        </p>
        <Link
          to="/blogs"
          className="bg-yellow-800 text-lg text-white px-8 py-4 rounded-full hover:bg-yellow-700 transition" // Adjusted padding
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Banner;
