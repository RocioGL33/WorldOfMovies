import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const useMovies = (search) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://api.themoviedb.org/3/";

  const getMovies = async (search) => {
    let url;
    if (search) {
      url = `${base_url}search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`;
    } else {
      url = `${base_url}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate`;
    }

    const adds = await axios
      .get(`${base_url}configuration?api_key=${API_KEY}`)
      .then((res) => res.data);
    //console.log(adds.images);

    const response = await axios.get(url).then((res) => res.data);
    //console.log(response.results);
    const movies = response.results.map((m) => {
      return {
        id: m.id,
        original_title: m.original_title,
        img: adds.images.base_url + adds.images.poster_sizes[3] + m.poster_path,
        vote_average: m.vote_average,
      };
    });
    //console.log(movies);
    setMovies(movies);
  };

  useEffect(() => {
    getMovies(search);
  }, [search]);

  return {
    movies,
  };
};
