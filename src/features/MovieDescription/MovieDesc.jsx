import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SpecMovieDetail } from "./SpecMovieDetail";
import { CircularProgress } from "@mui/material";

// (poster, movieName, imdbRate, rottenTomatoes, ratings, runtime, genre, aboutMovie, actor, director, awards)

export const MovieDesc = () => {
  const [JsonData, setJsonData] = useState([]);
  const [loading, setloading] = useState(true);
  const { id } = useParams();

  const movieSearch = () => {
    // console.log(id, "personalized search");
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/?i=${id}&apikey=${process.env.REACT_API_KEY}`
      )
      .then((response) => {
        // console.log(response);
        setJsonData(response.data);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    if (id !== "") {
      movieSearch();
    }
  }, [id]);

  return (
    <div>
      {/*  {(poster, movieName, imdbRate, rottenTomatoes, ratings, runtime, genre,
      aboutMovie, actor, director, awards)} */}
      {loading !== true ? (
        <SpecMovieDetail
          poster={JsonData.Poster}
          movieName={JsonData.Title}
          imdbRate={JsonData.imdbRating}
          rottenTomatoes={
            JsonData.Ratings[1] ? JsonData.Ratings[1].Value : "N/A"
          }
          ratings={JsonData.Rated}
          runtime={JsonData.Runtime}
          genre={JsonData.Genre}
          aboutMovie={JsonData.Plot}
          actor={JsonData.Actors}
          director={JsonData.Director}
          awards={JsonData.Awards}
        />
      ) : (
        <div className="the-loader">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};
