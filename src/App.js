import React, { useState } from "react";
import MovieList from "./component/MovieList";
import Filter from "./component/Filter";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./component/MovieDetails";

function App() {
  // Tableau pour regrouper les films//
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Fast and Furious 10",
      description:
        "Fast and Furious 10 ou Rapides 10 au Québec, est un film d'action franco-américain réalisé par Louis Leterrier et dont la sortie est prévue en 2023. Il s'agit du 11ᵉ et dernier long métrage découpé en deux parties de la franchise Fast and Furious et la suite du film Fast and Furious 9 sorti en 2021.",
      posterURL:
        "https://fr.web.img6.acsta.net/pictures/23/02/09/09/29/0283607.jpg",
      rating: 9.2,
      trailerID: "rPmA-4AhA94",
    },
    {
      id: 2,
      title: "MayDay",
      description:
        "Le pilote Brodie Torrance sauve des passagers d'un coup de foudre en effectuant un atterrissage risqué sur une île déchirée par la guerre seulement pour découvrir que survivre à l'atterrissage n'était que le début.",
      posterURL:
        "https://fr.web.img4.acsta.net/pictures/22/10/26/10/19/0944904.jpg",
      rating: 9.3,
      trailerID: "Kq3fpruK1vc",
    },
    {
      id: 3,

      title: "Disparue",
      description:
        "Lorsque sa mère disparaît alors qu'elle est en vacances en Colombie avec son nouveau petit ami, la recherche de réponses de June est entravée par la bureaucratie internationale.",
      posterURL:
        "https://bullesdeculture.com/bdc-content/uploads/2015/04/disparue-affiche-724x1024.jpg",
      rating: 9.0,
      trailerID: "WipxHHST4aw",
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  function handleFilterTitleChange(value) {
    setFilterTitle(value);
  }

  function handleFilterRatingChange(value) {
    setFilterRating(value);
  }

  function handleAddMovie() {
    // Alert box de type prompt (pour pouvoir rentrer des informations dans la box)
    const title = prompt("Titre du film :");
    const description = prompt("Description du film :");
    const posterURL = prompt("URL de l'affiche du film :");
    const rating = parseFloat(prompt("Note du film (sur 10) :"));
    const trailerID = prompt("Trailer ID du film :");

    // Ajout du film dans le tableau
    const newMovie = {
      id: movies.length + 1, // creation automatique de l'id du film
      title,
      description,
      posterURL,
      rating,
      trailerID, // tariler id du film (depuis youtube)
    };

    setMovies([...movies, newMovie]);
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Filter
          onFilterTitleChange={handleFilterTitleChange}
          onFilterRatingChange={handleFilterRatingChange}
        />
        <Routes>
          <Route // React Router pour la liaison entre les views
            path="/"
            element={
              <MovieList
                movies={movies}
                filterTitle={filterTitle}
                filterRating={filterRating}
              />
            }
          />
          <Route
            path="/movies/:id"
            element={<MovieDetails movies={movies} />}
          />
        </Routes>
        <button className="button" onClick={handleAddMovie}>
          Ajouter un nouveau film
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
