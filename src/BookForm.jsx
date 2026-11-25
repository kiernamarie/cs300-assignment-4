import { useState } from "react";

export default function BookForm({ onAddBook }) {
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [category, setCategory] = useState("");
  const [minutes, setMinutes] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Please enter a book title.";
    }

    if (!creator.trim()) {
      newErrors.creator = "Please enter an author.";
    }

    if (!category.trim()) {
      newErrors.category = "Please enter a category.";
    }

    if (!minutes || Number(minutes) <= 0) {
      newErrors.minutes = "Please enter a valid reading time.";
    }

    if (!description.trim()) {
      newErrors.description = "Please enter a description.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
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
    setErrors({});
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
          aria-invalid={!!errors.title}
          aria-describedby={errors.title ? "title-error" : undefined}
          required
        />
        {errors.title && (
          <p id="title-error" role="alert">{errors.title}</p>
        )}

        <label htmlFor="creator">Author</label>
        <input
          id="creator"
          value={creator}
          onChange={(event) => setCreator(event.target.value)}
          aria-invalid={!!errors.creator}
          aria-describedby={errors.creator ? "creator-error" : undefined}
          required
        />
        {errors.creator && (
          <p id="creator-error" role="alert">{errors.creator}</p>
        )}

        <label htmlFor="category">Category</label>
        <input
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-invalid={!!errors.category}
          aria-describedby={errors.category ? "category-error" : undefined}
          required
        />
        {errors.category && (
          <p id="category-error" role="alert">{errors.category}</p>
        )}

        <label htmlFor="minutes">Reading time (minutes)</label>
        <input
          id="minutes"
          type="number"
          min="1"
          value={minutes}
          onChange={(event) => setMinutes(event.target.value)}
          aria-invalid={!!errors.minutes}
          aria-describedby={errors.minutes ? "minutes-error" : undefined}
          required
        />
        {errors.minutes && (
          <p id="minutes-error" role="alert">{errors.minutes}</p>
        )}

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          aria-invalid={!!errors.description}
          aria-describedby={errors.description ? "description-error" : undefined}
          required
        />
        {errors.description && (
          <p id="description-error" role="alert">{errors.description}</p>
        )}

        <button type="submit">Add Book</button>
      </form>
    </section>
  );
}