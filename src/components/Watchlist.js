import React from "react";
import FishGrid from "./FishGrid";
import FishTile from "./FishTile";
import FilterControls from "./FilterControls";
import { useState } from "react";

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
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
      matchesMovieRating(movie, movieRating) &&
      watchlist.includes(movie.id)
  );

  return (
    <div>
      <FilterControls
        searchTerm={searchTerm}
        genre={genre}
        movieRating={movieRating}
        onSearchChange={handleSearchChange}
        onGenreChange={handleGenreChange}
        onMovieRatingChange={handleMovieRatingChange}
      ></FilterControls>
      <div className="movie-grid">
        {filteredMovies.map((movie) => {
          return (
            <FishTile
              key={movie.id}
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={true}
            ></FishTile>
          );
        })}
      </div>
    </div>
  );
}
