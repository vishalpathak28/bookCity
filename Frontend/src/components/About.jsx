import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-10">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">About Us</h1>
        <p className="text-gray-700 leading-relaxed text-lg dark:text-white">
          Welcome to <strong>Bookstore</strong> — your one-stop destination for knowledge, stories, and inspiration. Whether you're a student, a professional, or simply a curious reader, our collection is designed to meet your diverse needs. From academic textbooks and exam preparation to bestsellers and timeless classics, we aim to make quality books easily accessible to everyone.
          <br /><br />
          I’m <strong>Vishal Pathak</strong>, a Full Stack Web Developer with a B.Tech in Computer Science from Galgotias University. I built <strong>Bookstore</strong> using the MERN stack (MongoDB, Express.js, React, and Node.js) with the goal of combining my passion for reading and technology. This platform is not just a project — it’s a step towards creating a reading culture and making learning more convenient in the digital era.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
