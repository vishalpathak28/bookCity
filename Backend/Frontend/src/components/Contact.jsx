import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 py-20">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg text-center mb-8">
          Have questions or feedback? Reach out to us!
        </p>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded-md"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border rounded-md"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
