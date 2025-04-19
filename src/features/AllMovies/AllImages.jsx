import { React, useEffect, useState } from "react";
import axios from "axios";
import { Image } from "../../componets/Image";
import "../../App.css";

export const AllImages = ({ MovieType }) => {
  const BaseUrl = `${process.env.REACT_APP_BASE_URL}/?s=${MovieType}&apikey=5c8be314`;
  const [movies, setMovies] = useState([]);
  const [Error, setError] = useState(false);

  const getAllMovies = async () => {
    axios.get(BaseUrl).then((response) => {
      console.log(response.data);
      if (response.data.Search) {
        setMovies(response.data.Search);
        setError(false);
      } else {
        setError(true);
      }
      // response.data.Search ? setMovies(response.data.Search) : setError(true);
    });
  };

  useEffect(() => {
    getAllMovies();
  }, [MovieType]);

  return (
    <div className="AllMovies">
      {Error ? (
        <div className="not-movie">Movie Not Found</div>
      ) : (
        movies.map((movie, index) => (
          <Image
            key={index}
            image={movie.Poster}
            movieName={movie.Title}
            alt={movie.imdbID}
            year={movie.Year}
          />
        ))
      )}
    </div>
  );
};
