import { useState } from "react";

export default function BookForm({ onAddBook }) {
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [category, setCategory] = useState("");
  const [minutes, setMinutes] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !title.trim() ||
      !creator.trim() ||
      !category.trim() ||
      !minutes ||
      Number(minutes) <= 0 ||
      !description.trim()
    ) {
      setError("Please complete all fields with valid information.");
      return;
    }

    onAddBook({
      id: crypto.randomUUID(),
      title: title.trim(),
      creator: creator.trim(),
      category: category.trim(),
      minutes: Number(minutes),
      description: description.trim(),
      read: false
    });

    setTitle("");
    setCreator("");
    setCategory("");
    setMinutes("");
    setDescription("");
    setError("");
  }

  return (
    <section className="form-section">
      <h2>Add a Book</h2>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="title">Book title</label>
        <input
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <label htmlFor="creator">Author</label>
        <input
          id="creator"
          value={creator}
          onChange={(event) => setCreator(event.target.value)}
          required
        />

        <label htmlFor="category">Category</label>
        <input
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
        />

        <label htmlFor="minutes">Reading time (minutes)</label>
        <input
          id="minutes"
          type="number"
          min="1"
          value={minutes}
          onChange={(event) => setMinutes(event.target.value)}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />

        {error && <p role="alert">{error}</p>}

        <button type="submit">Add Book</button>
      </form>
    </section>
  );
}
