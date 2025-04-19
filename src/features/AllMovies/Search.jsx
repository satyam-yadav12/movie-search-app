import { React, useState } from "react";
import "c:/Users/New hi-tech/Desktop/Projects/movie_app/src/App.css";

export const Search = (handleSearch) => {
  const [inputText, setInputText] = useState("");

  const handleInitSearch = () => {
    handleSearch(inputText);
    console.log(inputText, "from the form");
  };

  return (
    <div className="SearchForm">
      <input
        className="SearchBar"
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        placeholder="Search Movie Name"
      />
      <button className="BtnStyle" onClick={handleInitSearch}>
        Search
      </button>
    </div>
  );
};
