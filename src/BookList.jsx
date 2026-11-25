import BookCard from "./BookCard.jsx";

export default function BookList({ books, onToggleRead, onRemove }) {
  if (books.length === 0) {
    return <p>No books found.</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onToggleRead={onToggleRead}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
