import React from "react";
import FishGrid from "./FishGrid";
import FishTile from "./FishTile";
import FilterControls from "./FilterControls";
import { useState } from "react";

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const matchesGenre = (movie, genre) => {
    return genre === "All" || movie.genre === genre;
  };

  const filteredMovies = movies.filter(
    (movie) =>
      matchesSearchTerm(movie, searchTerm) &&
      matchesGenre(movie, genre) &&
      watchlist.includes(movie.id)
  );

  return (
    <div>
      <FilterControls
        searchTerm={searchTerm}
        genre={genre}
        onSearchChange={handleSearchChange}
        onGenreChange={handleGenreChange}
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
