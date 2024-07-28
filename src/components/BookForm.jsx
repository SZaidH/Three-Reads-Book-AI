import { useState } from "react";
import BookProcessing from "./BookProcessing";

const BookForm = () => {
  // State for the favorite books
  const [books, setBooks] = useState({ book1: "", book2: "", book3: "" });
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooks({ ...books, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(books);
    setBooks({ book1: "", book2: "", book3: "" });
  };

  // To check if all the text inputs are filled
  const isInputFilled = books.book1 && books.book2 && books.book3;

  return (
    <main className="book-form-container">
      <form className="book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={books.book1}
          name="book1"
          placeholder="Book 1"
          onChange={handleChange}
        />
        <input
          type="text"
          value={books.book2}
          name="book2"
          placeholder="Book 2"
          onChange={handleChange}
        />
        <input
          type="text"
          value={books.book3}
          name="book3"
          placeholder="Book 3"
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={!isInputFilled}
          // Apply style if input fields are empty
          className={!isInputFilled ? "btn-disable" : ""}
        >
          Find Books
        </button>
      </form>
      {formData && (
        // Passing the book form data as a prop to the child component
        <BookProcessing data={formData} />
      )}
    </main>
  );
};

export default BookForm;
