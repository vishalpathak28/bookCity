import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Blog() {
  return (
    <>
      <Navbar />
      {/* Add margin-top after navbar */}
      <div className="mt-16 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12">
        <h1 className="text-4xl font-bold mb-10 text-center">Developer's Blog</h1>

        {/* Blog Post 1 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold">🚀 How I Built My MERN Stack Project</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Published on August 2, 2025</p>
          <p className="mt-2">
            In this post, I walk you through how I created a full-stack project using MongoDB, Express.js, React.js, and Node.js.
            I discuss backend structure, frontend UI decisions, integrating Stripe API for payments, and deploying the site using Vercel and Render.
          </p>
          <p className="mt-2">
            Challenges I faced included asynchronous data fetching, user authentication, and maintaining RESTful API standards. I share code snippets and screenshots to help beginners avoid common pitfalls.
          </p>
        </div>

        {/* Blog Post 2 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold">💡 Top 7 JavaScript Interview Questions</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Published on July 28, 2025</p>
          <p className="mt-2">
            Whether you're preparing for a frontend interview or brushing up your knowledge, these 7 questions are commonly asked — and frequently misunderstood.
            Topics include closures, hoisting, `this` keyword, event loop, promises, and ES6 features.
          </p>
          <p className="mt-2">
            Each question includes a short explanation, code sample, and tips on how to approach similar problems in interviews.
          </p>
        </div>

        {/* Blog Post 3 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold">📦 Deploying a React App Using Vercel</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Published on July 18, 2025</p>
          <p className="mt-2">
            Deploying your React site is easier than ever with Vercel. In this post, I guide you step-by-step on how to connect your GitHub repo, configure your build settings, and go live.
          </p>
          <p className="mt-2">
            I also share some common errors like environment variable misconfigurations and build failures — and how to solve them.
          </p>
        </div>

        {/* Blog Post 4 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold">🧠 How to Structure a Scalable Node.js API</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Published on July 12, 2025</p>
          <p className="mt-2">
            In this technical breakdown, I show how to structure a Node.js REST API using the MVC pattern, with proper separation of concerns.
            We explore routing, controllers, services, and models — all optimized for scalability.
          </p>
          <p className="mt-2">
            I also added best practices like using `dotenv`, handling errors gracefully, and validating user input.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
