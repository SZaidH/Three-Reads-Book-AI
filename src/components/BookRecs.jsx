import useStore from "../store"; // Importing Zustand store

const BookRecs = ({ thumbnails }) => {
  const bookRecs = useStore((state) => state.bookDetails);

  // Rendering the books recommended by Gemini API
  return (
    <section className="book-recs">
      <h1>Recommendations</h1>
      <div className="book-list">
        {bookRecs.map((book, index) => (
          <div className="book-details" key={book.book}>
            <div className="book-thumbnail">
              <img src={thumbnails[index]} alt="Book Thumbnail" />
            </div>
            <div className="book-info">
              <h2>{book.book}</h2>
              <h3>{book.author}</h3>
              <p>{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookRecs;
