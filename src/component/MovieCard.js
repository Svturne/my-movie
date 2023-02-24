import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function MovieCard({ movie }) {
  const { id, title, description, posterURL, rating } = movie;

  return (
    <Link
      to={`/movies/${id}`}
      className="card-link"
      style={{ textDecoration: "none" }}
    >
      <div className="card">
        <img className="card img" src={posterURL} alt={title} />
        <h3 className="card h3">{title}</h3>
        <p className="card p">{description}</p>
        <p>Note ⭐: {rating}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
