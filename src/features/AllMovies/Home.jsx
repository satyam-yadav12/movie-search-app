import React, { useState } from "react";
import { Search } from "./Search";

import "../../App.css";

import { AboutApp } from "./AboutApp";

import { AllImages } from "./AllImages";

export const Home = () => {
  const [query, setQuery] = useState(null);

  const handleSearch = (value) => {
    setQuery(value);
  };

  return (
    <div
      className="root"
      style={{ height: "max-content", position: "absolute" }}
    >
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
