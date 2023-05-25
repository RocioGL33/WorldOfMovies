import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDetail } from "../hooks/useDetail";
import { UilCalendarAlt, UilStar, UilFilm } from "@iconscout/react-unicons";

const MovieDetail = () => {
  const { id } = useParams();
  const { detail } = useDetail(id);

  return (
    <>
      <div className="md:flex m-4 bg-darkGrey h-11 w-11 items-center justify-center rounded-full">
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
          <img
            src={detail.img}
            alt="img not found"
            id="img-detail"
            className=""
          />
        </div>
        <div className="text-grey mt-3">
          <h4 className="text-white text-xl pl-2 pb-1">
            {detail.original_title}
          </h4>
          <h4 className="text-md px-2">{detail.tagline}</h4>
          <h4 className="text-sm p-2"> {detail.overview}</h4>
          <div className="m-2 p-3 bg-intenseRed rounded-lg">
            <div className="flex">
              <UilCalendarAlt />
              <h4 className="pl-2">Release Date: {detail.release_date}</h4>
            </div>
            <div className="flex pt-5">
              <UilStar />
              <h4 className="pl-2"> Vote Average: {detail.vote_average}</h4>
            </div>
            <div className="flex pt-5">
              <UilFilm />
              <h4 className="pl-2">
                Production Company: {detail.production_companies}
              </h4>
            </div>
          </div>
          <div className="p-2 m-2 bg-intenseRed rounded-lg">
            <h4 className="text-lg">Genres: </h4>
            {detail.genres?.map((g) => (
              <h3 className="pt-3" key={g}>
                • {g}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
