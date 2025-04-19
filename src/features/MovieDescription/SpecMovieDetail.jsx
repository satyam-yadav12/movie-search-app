import React from "react";
import "c:/Users/New hi-tech/Desktop/Projects/movie_app/src/App.css";

export const SpecMovieDetail = (props) => {
  return (
    <div className="outer-container">
      <h1>TVMaze</h1>
      <div className="MovieSpecs">
        <div className="movie-poster">
          <img src={props.poster} alt={props.movieName} />
        </div>

        <div className="details">
          <div className="movie-title">{props.movieName}</div>
          <div className="genre">
            <p className="runtime">
              <strong>runtime: </strong>
              {props.runtime}
            </p>
            <p>
              <strong>genre: </strong>
              {props.genre}
            </p>
          </div>

          <div className="ratings">
            <p>
              <strong>IMDB Ratings: {props.imdbRate}</strong>
            </p>
            <p>
              <strong>Rotten Tomatoes: {props.rottenTomatoes}</strong>
            </p>
            <p>
              <strong>Rated: {props.ratings}</strong>
            </p>
          </div>

          <div className="movie-plot">
            <p>
              <strong>About Movie: </strong>
              {props.aboutMovie}
            </p>
          </div>

          <div className="credit-awards">
            <p>
              <strong>Actors: </strong>
              {props.actor}
            </p>
            <p>
              <strong>awards: </strong>
              {props.awards}
            </p>

            <p>
              <strong>director: </strong>
              {props.director}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
