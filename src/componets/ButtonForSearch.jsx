import React from "react";
import "../App.css";

export const ButtonForSearch = (props) => {
  return (
    <div>
      <button className="BtnStyle">{props.ButtonValue}</button>
    </div>
  );
};
