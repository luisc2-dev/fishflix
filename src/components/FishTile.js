import React from "react";

const getMovieRating = (movie) => {
  let rating = movie.rating;

  if (rating < 5) {
    return "rating-bad";
  }
  if (rating >= 5 && rating < 7) {
    return "rating-ok";
  }
  if (rating >= 7) {
    return "rating-good";
  }
};

export default function FishTile({ movie, isWatchlisted, toggleWatchlist }) {
  return (
    <div className="movie-card" key={movie.id}>
      <img
        className="Image-Style"
        src={`fish_images/${movie.image}`}
        alt={movie.title}
      />
      <h1 className="movie-card-title">{movie.title}</h1>
      <span className="movie-card-genre">{movie.genre}</span>
      <span className={`movie-card-rating ${getMovieRating(movie)}`}>
        {movie.rating}
      </span>
      <div>
        <label className="label">
          Watchlist?
          <input
            className="checkbox"
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(movie.id)}
          ></input>
        </label>
      </div>
    </div>
  );
}
