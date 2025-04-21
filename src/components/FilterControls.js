export default function FilterControls({
  searchTerm,
  onSearchChange,
  genre,
  onGenreChange,
  movieRating,
  onMovieRatingChange,
}) {
  return (
    <div className="controls">
      <div className="controls-row">
        <label className="genre-label">
          Genre
          <select value={genre} onChange={onGenreChange}>
            <option>All</option>
            <option>Comedy</option>
            <option>Adventure</option>
            <option>Horror</option>
          </select>
        </label>
        <label className="genre-label">
          Rating
          <select value={movieRating} onChange={onMovieRatingChange}>
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </label>
        <input
          type="text"
          className="search-input"
          placeholder="Search Fishflix..."
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>
    </div>
  );
}
