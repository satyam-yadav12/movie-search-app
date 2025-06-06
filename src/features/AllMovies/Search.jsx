import { React, useCallback, useEffect, useState } from "react";
import "../../App.css";
import { CircularProgress } from "@mui/material";

export const Search = ({ handleSearch }) => {
  const [inputText, setInputText] = useState("");
  const [searchLoader, setSearchLoader] = useState(false);

  const handleInitSearch = useCallback(() => {
    handleSearch(inputText);
  }, [handleSearch, inputText]);

  useEffect(() => {
    const DelayDebounce = setTimeout(() => {
      handleInitSearch();
      setSearchLoader(false);
    }, 500);
    return () => {
      clearTimeout(DelayDebounce);
      setSearchLoader(true);
    };
  }, [inputText, handleInitSearch]);

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
        {searchLoader ? <CircularProgress size="20px" /> : "Search"}
      </button>
    </div>
  );
};
