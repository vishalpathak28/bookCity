import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
// import list from "../../public/list.json"
// import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return ( 
    <>
      <div className="pt-20 max-w-screen-2xl container mx-auto md:px-20 px-4 bg-white dark:bg-slate-900">

        <div className="mt-10 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            You've just unlocked awesome — {" "}
            <span className="text-pink-500"> welcome!)</span>
          </h1>
          <p className="mt-12">
            Dive into a world of books where learning never stops. Whether you're preparing for exams, brushing up on skills, or exploring new topics, Bookstore is your trusted digital companion. Discover, read, and grow with us — one page at a time.
          </p>

           <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
        </div>
      </div>
    </>
  );
}

export default Course;
