export default function FilterControls({
  searchTerm,
  onSearchChange,
  genre,
  onGenreChange,
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
