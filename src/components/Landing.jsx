import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="bg-[url('https://i.imgur.com/JNLTgW2.png')] bg-cover h-screen w-screen flex flex-col">
      <div className="pt-80 pl-16">
        <h1 className="text-6xl text-white">Welcome to</h1>
        <span className="text-8xl font-semibold text-white">
          World of Movies
        </span>
      </div>
      <div className="pt-20 pl-96">
        <Link to="/home">
          <button className="text-white text-2xl flex">
            Enter
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              id="arrow-right"
              width="33"
            >
              <path
                fill="#F7F7F7"
                d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
