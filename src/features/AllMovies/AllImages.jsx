import { React, useEffect, useState } from "react";
import axios from "axios";
import { Image } from "../../componets/Image";

export const AllImages = (props) => {
  const BaseUrl = `${process.env.REACT_APP_BASE_URL}/?s=${props.MovieType}&apikey=5c8be314`;
  const [movies, setMovies] = useState([]);

  const getAllMovies = async () => {
    axios.get(BaseUrl).then((response) => {
      console.log(response.data);
      setMovies(response.data.Search);
    });
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="AllMovies">
      {movies.map((movie) => (
        <Image
          key={movie.imdbId}
          image={movie.Poster}
          movieName={movie.Title}
          alt={movie.imdbID}
          year={movie.Year}
        />
      ))}
    </div>
  );
};
