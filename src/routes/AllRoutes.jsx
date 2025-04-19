import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import { Home } from "../features/AllMovies/Home";
import { MovieDesc } from "../features/MovieDescription/MovieDesc";
import { AllMovies } from "../features/AllMovies/Allmovies";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<AllMovies />} />
      <Route path="/movies/:id" element={<MovieDesc />} />
    </Routes>
  );
};

export default AppRoutes;
