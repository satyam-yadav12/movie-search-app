import React, { useState } from "react";
import { Search } from "./Search";
import { ButtonForSearch } from "../../componets/ButtonForSearch";
import "c:/Users/New hi-tech/Desktop/Projects/movie_app/src/App.css";
import { AboutApp } from "./AboutApp";

import { AllImages } from "./AllImages";

export const Home = () => {
  const [query, setQuery] = useState(null);

  const handleSearch = (value) => {
    setQuery(value);
  };

  return (
    <div className="root" style={{ height: "100vh", position: "absolute" }}>
      <div className="SearchForm">
        <Search handleSearch={handleSearch} />
      </div>

      <AboutApp />
      {query ? (
        <AllImages MovieType={query} />
      ) : (
        <AllImages MovieType="avengers" />
      )}
    </div>
  );
};
