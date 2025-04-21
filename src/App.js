import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FishGrid from "./components/FishGrid";
import Watchlist from "./components/Watchlist";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const toggleWatchlist = (movID) => {
    setWatchlist((prev) =>
      prev.includes(movID)
        ? prev.filter((id) => id !== movID)
        : [...prev, movID]
    );
  };

  useEffect(() => {
    fetch("fish_movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div>
      <title>FishFlix</title>
      <h1 className="title">FISHFLIX</h1>
      <Router>
        <nav className="nav-bar">
          <Link to="/" className="nav-button">
            Home
          </Link>
          <Link to="/watchlist" className="nav-button">
            Watchlist
          </Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <FishGrid
                movies={movies}
                watchlist={watchlist}
                toggleWatchlist={toggleWatchlist}
              ></FishGrid>
            }
          ></Route>
          <Route
            path="/watchlist"
            element={
              <Watchlist
                movies={movies}
                watchlist={watchlist}
                toggleWatchlist={toggleWatchlist}
              ></Watchlist>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
