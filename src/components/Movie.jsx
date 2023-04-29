import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ id, img, original_title, vote_average }) => {
  return (
    <div className="">
      <Link to={`/movies/${id}`}>
        <img src={img} alt="img not found" className="" />
      </Link>
    </div>
  );
};

export default Movie;
