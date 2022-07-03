import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing-page">
      <h1 className="tag-landing">
        Welcome to <span className="span-landing">World of Movies</span>
      </h1>

      <Link to="/home">
        <button class="learn-more">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Enter</span>
        </button>
      </Link>
    </div>
  );
};

export default Landing;
