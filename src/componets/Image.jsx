import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export const Image = ({ image, movieName, alt, year }) => {
  const navigate = useNavigate();
  // const params = useParams();

  const getSpecificMovie = () => {
    // console.log(alt);
    navigate(`/movies/${alt}`);
    // params.id;
  };

  return (
    <div className="Card" onClick={getSpecificMovie}>
      <div className="Poster">
        <img src={image} alt={alt} />
      </div>

      <div className="titleDetails">
        <div className="movie-name">{movieName}</div>
        <div className="movie-year">{year}</div>
      </div>
    </div>
  );
};
