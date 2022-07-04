import React, { useState } from "react";
import ReactStars from "react-stars";
import { MdLocalFireDepartment } from "react-icons/md";
import Movie from "./Movie";
import { useMovies } from "../hooks/useMovies";
//import { useFilter } from "../hooks/useFilter";
import { Link } from "react-router-dom";
//import { HiOutlineStar } from "react-icons/hi";
import "./home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [star, setStar] = useState(0);
  const { movies } = useMovies(search);

  const handleOnChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    //console.log(e.target.value);
  };

  const handleOnClick = (value) => {
    if (star === value) {
      setStar(0);
    } else {
      setStar(value);
    }
  };

  let result = !search
    ? movies
    : movies.filter((d) =>
        d.original_title.toLowerCase().includes(search.toLocaleLowerCase())
      );

  result = movies.filter(
    (movie) =>
      !star ||
      (movie.vote_average <= star * 2 && movie.vote_average >= (star - 1) * 2)
  );

  return (
    <>
      <div className="slider">
        <Link to="/">
          <button className="button-home">Back to Landing</button>
        </Link>

        <h2 className="h-slogan">Your favorite movies have arrived</h2>
        <h3 className="h-mini">They all have something to tell you.</h3>

        <input
          value={search}
          onChange={(e) => handleOnChange(e)}
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="rating">
        <label className="label-rating">Rate:</label>
        <ReactStars
          count={5}
          value={star}
          onChange={handleOnClick}
          size={40}
          half={false}
          color2={"#ffd700"}
        />
      </div>

      <div className="recomendations">
        <h2 className="h2-recomendation">Recommendations for you</h2>
        <MdLocalFireDepartment />
      </div>

      <div className="grid-container">
        {result.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            original_title={movie.original_title}
            original_language={movie.original_language}
            img={movie.img}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
      <footer className="footer">
        <div className="f-information">
          <h4>About</h4>
          <h4>Jobs</h4>
          <h4>Newsletter</h4>
          <h4>Legal</h4>
        </div>
        <div className="f-information">
          <h3>branch offices</h3>
          <h4> California - CA</h4>
          <h4> Utah - UT</h4>
          <h4> Louisiana - LA</h4>
        </div>
        <div className="f-information">
          <h3>Cinemas</h3>
          <h4> 2D standard</h4>
          <h4> 3D standar</h4>
          <h4> 3D Plus</h4>
        </div>
        <div className="copyright">
          <h4>Instagram</h4>
          <h4>Facebook</h4>
          <h5>All rights reserved - World Of Movies</h5>
        </div>
      </footer>
    </>
  );
};

export default Home;
