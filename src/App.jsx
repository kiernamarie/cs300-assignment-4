import { useState } from "react";
import initialBooks from "../data/books.json";
import Header from "./Header.jsx";
import BookList from "./BookList.jsx";
import BookForm from "./BookForm.jsx";
import CollectionControls from "./CollectionControls.jsx";
import "./styles.css";

export default function App() {
  const [books, setBooks] = useState(initialBooks);
  const [filter, setFilter] = useState("all");

  function addBook(newBook) {
    setBooks((previousBooks) => [...previousBooks, newBook]);
  }

  function toggleRead(id) {
    setBooks((previousBooks) =>
      previousBooks.map((book) =>
        book.id === id
          ? { ...book, read: !book.read }
          : book
      )
    );
  }

  function removeBook(id) {
    setBooks((previousBooks) =>
      previousBooks.filter((book) => book.id !== id)
    );
  }

  const filteredBooks = books.filter((book) => {
    if (filter === "read") return book.read;
    if (filter === "unread") return !book.read;
    return true;
  });

  return (
    <main className="app">
      <Header />

      <BookForm onAddBook={addBook} />

      <section>
        <h2>My Collection</h2>
        <p>Total books: {books.length}</p>

        <CollectionControls
          filter={filter}
          onFilterChange={setFilter}
        />

        <p>Showing {filteredBooks.length} books</p>

        <BookList
          books={filteredBooks}
          onToggleRead={toggleRead}
          onRemove={removeBook}
        />
      </section>
    </main>
  );
}
