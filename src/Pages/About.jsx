import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner Section */}
      <div className="flex items-center justify-center bg-bg-banner w-full h-[500px]">
        <div className="py-40 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 pt-8">
            Welcome to About Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-snug">
            Welcome to our website! We are dedicated to providing you with the best experience possible. Our team is passionate about what we do, and we strive to exceed your expectations. ...
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto p-6 lg:p-12 flex flex-col lg:flex-row items-center">
        {/* Company Image */}
        <div className="lg:w-1/2 mb-6 lg:mb-0 lg:pr-8">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqotNYESJ3_KeENTEF8tSTsZSniD5SQROEHw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETKVsufoTSED7-pMzg9zNasdvlo-TSJd6-Q&s" 
            alt="About Us" 
            className="w-full h-auto rounded-lg shadow-lg" 
          />
        </div>

        {/* Company Information */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our company was founded with the mission to bring innovative solutions and exceptional services to our clients. We believe in the power of collaboration and creativity to drive success. With a diverse team of experts, we are committed to delivering high-quality results and building lasting relationships.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We value integrity, transparency, and dedication in all that we do. Our goal is to be a trusted partner and make a positive impact in the industry. Thank you for visiting our website, and we look forward to working with you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
