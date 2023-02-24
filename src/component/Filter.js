import React from "react";
import "../App.css";

function Filter({ onFilterTitleChange, onFilterRatingChange }) {
  return (
    <div className="filter">
      <input
        className="filter input"
        type="text"
        placeholder="Filtrer par titre"
        onChange={(e) => onFilterTitleChange(e.target.value)}
      />
      <input
        className="filter input"
        type="number"
        placeholder="Filtrer par note"
        min="1"
        max="10"
        step="0.1"
        onChange={(e) => onFilterRatingChange(parseFloat(e.target.value))}
      />
    </div>
  );
}

export default Filter;
