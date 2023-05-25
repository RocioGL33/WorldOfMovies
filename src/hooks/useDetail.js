import { useState, useEffect } from "react";
import axios from "axios";

export const useDetail = (id) => {
  const [detail, setDetail] = useState({});
  const base_url = "https://api.themoviedb.org/3/";

  const getDetail = async () => {
    const adds = await axios
      .get(`${base_url}configuration?api_key=55a8fa4c6d88b26c1c9e150c83aa784e`)
      .then((res) => res.data);

    const response = await axios
      .get(
        `${base_url}movie/${id}?api_key=55a8fa4c6d88b26c1c9e150c83aa784e&language=en-US`
      )

      .then((res) => res.data);
    //console.log(response);
    const movie = {
      id: response.id,
      original_title: response.original_title,
      overview: response.overview,
      original_language: response.original_language,
      img:
        adds.images.base_url +
        adds.images.poster_sizes[5] +
        response.backdrop_path,
      vote_average: response.vote_average,
      release_date: response.release_date,
      tagline: response.tagline,
      genres: response.genres.map((g) => g.name),
      spoken_languages: response.spoken_languages.map((l) => l.english_name),
      production_companies: response.production_companies.map((p) => p.name[0]),
    };

    setDetail(movie);
  };

  useEffect(() => {
    getDetail(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    detail,
  };
};
