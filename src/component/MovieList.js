import React from "react";
import MovieCard from "./MovieCard";
import "../App.css";

function MovieList({ movies, filterTitle, filterRating }) {
  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase());
    const ratingMatch = filterRating === "" || movie.rating >= filterRating;
    return titleMatch && ratingMatch;
  });

  return (
    <div className="movie-list">
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
