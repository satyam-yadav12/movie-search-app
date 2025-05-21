import { React, useEffect, useState } from "react";
import axios from "axios";
import { Image } from "../../componets/Image";
import "../../App.css";
import { LinearProgress } from "@mui/material";

export const AllImages = ({ MovieType }) => {
  const BaseUrl = `${process.env.REACT_APP_BASE_URL}/?s=${MovieType}&apikey=${process.env.REACT_APP_API_KEY}`;
  const [movies, setMovies] = useState([]);
  const [Error, setError] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const getAllMovies = async () => {
    axios.get(BaseUrl).then((response) => {
      // console.log(response.data);
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
    setIsUpdating(true);

    setTimeout(() => {
      setIsUpdating(false);
    }, 2000);
  }, [MovieType]);

  useEffect(() => {
    getAllMovies();
  }, [MovieType]);

  return (
    <div className="AllMovies">
      <div style={{ position: "absolute", width: "90%" }}>
        {isUpdating ? <LinearProgress /> : ""}
      </div>
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
