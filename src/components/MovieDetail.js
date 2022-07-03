import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDetail } from "../hooks/useDetail";
import "./movieDetail.css";

const MovieDetail = () => {
  const { id } = useParams();
  const { detail } = useDetail(id);

  return (
    <>
      <Link to="/home">
        <button className="button-detail">Back to home</button>
      </Link>

      <div className="father-detail">
        <div className="container-detail">
          {/*Sacar lo que esta antes de los dos puntos*/}
          <h4 className="title"> Title: {detail.original_title}</h4>
          <h4> {detail.overview}</h4>
          <h4> Release Date: {detail.release_date}</h4>
          <h4> Vote Average: {detail.vote_average}</h4>
          <h4> Production Company: {detail.production_companies}</h4>

          {detail.genres?.map((g) => (
            <h3 key={g}>{g}</h3>
          ))}
        </div>
        <div className="container-media">
          <img src={detail.img} alt="img not found" id="img-detail" />
          <h4 className="tagline">{detail.tagline}</h4>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
