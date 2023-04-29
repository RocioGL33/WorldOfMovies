import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDetail } from "../hooks/useDetail";

const MovieDetail = () => {
  const { id } = useParams();
  const { detail } = useDetail(id);

  return (
    <>
      <div className="m-4 bg-darkGrey h-11 w-11 flex items-center justify-center rounded-full">
        <Link to="/home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="estate"
            width="25"
            height="25"
          >
            <path
              fill="#FFFFFF"
              d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"
            ></path>
          </svg>
        </Link>
      </div>

      <div className="">
        <div className="">
          <h4 className="">{detail.original_title}</h4>
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
          <h4 className="">{detail.tagline}</h4>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
