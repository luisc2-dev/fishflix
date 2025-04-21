import React, { useState } from "react";
import "../styles.css";
import FishTile from "./FishTile";
import FilterControls from "./FilterControls";

export default function FishGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All");
  const [movieRating, setMovieRating] = useState("All");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleMovieRatingChange = (e) => {
    setMovieRating(e.target.value);
    console.log(movieRating);
  };

  const getMovieRating = (movie) => {
    if (movie.rating < 5) {
      return "Bad";
    }
    if (movie.rating >= 5 && movie.rating < 7) {
      return "Ok";
    }
    if (movie.rating > 7) {
      return "Good";
    }
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const matchesGenre = (movie, genre) => {
    return genre === "All" || movie.genre === genre;
  };

  const matchesMovieRating = (movie, movieRating) => {
    return movieRating === "All" || getMovieRating(movie) === movieRating;
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchesSearchTerm(movie, searchTerm) &&
      matchesGenre(movie, genre) &&
      matchesMovieRating(movie, movieRating)
  );

  return (
    <div>
      <FilterControls
        searchTerm={searchTerm}
        genre={genre}
        onGenreChange={handleGenreChange}
        onSearchChange={handleSearchChange}
        movieRating={movieRating}
        onMovieRatingChange={handleMovieRatingChange}
      ></FilterControls>
      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <FishTile
            movie={movie}
            key={movie.id}
            isWatchlisted={watchlist.includes(movie.id)}
            toggleWatchlist={toggleWatchlist}
          ></FishTile>
        ))}
      </div>
    </div>
  );
}
