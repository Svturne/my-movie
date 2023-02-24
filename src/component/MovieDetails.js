import React from "react";
import { Link, useParams } from "react-router-dom";

function MovieDetails(props) {
  const { movies } = props;
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Le film demandé n'a pas été trouvé.</div>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <div className="trailer-container">
        <iframe
          title="Trailer"
          src={`https://www.youtube.com/embed/${movie.trailerID}`} // base lien youtube + Tariler id qui se trouve dans App.js
          allowFullScreen
          style={{ width: "800px", height: "450px" }}
        />
        <Link // bouton retour qui redirige vers la page principale
          to="/"
          className="button"
          style={{
            width: "50px",
            margin: "50px",
            backgroundColor: "yellow",
            color: "black",
            textDecoration: "none",
          }}
        >
          Retour
        </Link>
      </div>
    </div>
  );
}

export default MovieDetails;
