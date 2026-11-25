export default function CollectionControls({ filter, onFilterChange }) {
  return (
    <div className="collection-controls">
      <label htmlFor="status-filter">Filter by reading status:</label>

      <select
        id="status-filter"
        value={filter}
        onChange={(event) => onFilterChange(event.target.value)}
      >
        <option value="all">All Books</option>
        <option value="read">Read Books</option>
        <option value="unread">Unread Books</option>
      </select>
    </div>
  );
}
