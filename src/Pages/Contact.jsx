import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Banner Section */}
      <div className="flex items-center justify-center bg-bg-banner w-full h-[500px]">
        <div className="py-40 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 pt-8">
            Welcome to Contact Page
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl leading-snug">
            If you have any questions, feel free to reach out to us. We're here to help!
          </p>
        </div>
      </div>

      {/* Contact Form and Details Section */}
      <div className="container mx-auto p-6 lg:p-12 flex flex-col lg:flex-row">
        {/* Contact Form */}
        <div className="lg:w-2/3 bg-white rounded-lg shadow-lg p-6 lg:pr-12 mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="lg:w-1/3 bg-white rounded-lg shadow-lg p-6 lg:pl-12">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p className="text-lg text-gray-600 mb-4">
            <strong>Address:</strong> 113 Main Street, Magway
          </p>
          <p className="text-lg text-gray-600 mb-4">
            <strong>Phone:</strong> (+959) 123456789
          </p>
          <p className="text-lg text-gray-600 mb-4">
            <strong>Email:</strong> hsushunelai.se@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
