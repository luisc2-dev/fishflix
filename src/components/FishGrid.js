import React, { useState } from "react";
import "../styles.css";
import FishTile from "./FishTile";
import FilterControls from "./FilterControls";

export default function FishGrid({ movies, watchlist, toggleWatchlist }) {
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
      matchesSearchTerm(movie, searchTerm) && matchesGenre(movie, genre)
  );

  return (
    <div>
      <FilterControls
        searchTerm={searchTerm}
        genre={genre}
        onGenreChange={handleGenreChange}
        onSearchChange={handleSearchChange}
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
