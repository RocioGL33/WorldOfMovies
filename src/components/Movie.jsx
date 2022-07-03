import React from "react";
import { Link } from "react-router-dom";
import "./movie.css";

const Movie = ({ id, img, vote_average }) => {
  return (
    <div className="movie-card">
      <Link to={`/movies/${id}`}>
        <img src={img} alt="img not found" className="img-home" />
      </Link>
    </div>
  );
};

export default Movie;
