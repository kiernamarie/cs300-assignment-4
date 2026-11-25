export default function BookCard({ book, onToggleRead, onRemove }) {
  return (
    <article className="book-card">
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.creator}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Reading time:</strong> {book.minutes} minutes</p>
      <p>{book.description}</p>

      <p>
        <strong>Status:</strong> {book.read ? "Read" : "Unread"}
      </p>

      <div className="book-actions">
        <button
          type="button"
          onClick={() => onToggleRead(book.id)}
        >
          {book.read ? "Mark as Unread" : "Mark as Read"}
        </button>

        <button
          type="button"
          onClick={() => onRemove(book.id)}
          aria-label={`Remove ${book.title}`}
        >
          Remove
        </button>
      </div>
    </article>
  );
}
