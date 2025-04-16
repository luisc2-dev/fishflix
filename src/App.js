import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import FishTile from "./components/FishTile";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
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

  useEffect(() => {
    fetch("fish_movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <title className="title">FishFlix</title>
      <h1 className="title">FISHFLIX</h1>
      <div className="controls">
        <div className="controls-row">
          <label className="genre-label">
            Genre
            <select value={genre} onChange={handleGenreChange}>
              <option>All</option>
              <option>Comedy</option>
              <option>Adventure</option>
              <option>Horror</option>
            </select>
          </label>
          <input
            type="text"
            className="search-input"
            placeholder="Search Fishflix..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <FishTile movie={movie} key={movie.id}></FishTile>
        ))}
      </div>
    </div>
  );
}

export default App;
