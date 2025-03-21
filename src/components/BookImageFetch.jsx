import { useEffect, useRef, useState } from "react";
import useStore from "../store"; // Importing Zustand store
import BookRecs from "./BookRecs";

const BookImageFetch = () => {
  const bookNameTrim = useStore((state) => state.bookDetails);
  const setLoading = useStore((state) => state.setLoading);
  const [bookThumbnails, setBookThumbnails] = useState([]); // State to store the books fetched from Google Books API
  const bookRecsRef = useRef(null); // Ref for BookRecs component

  useEffect(() => {
    // Trimming spaces and adding hyphens to the book names to ensure that the api gets formatted data
    const trimName = bookNameTrim.map((book) =>
      book.book.replace(/ /g, "-").toLowerCase()
    );

    // Function to fetch the book thumbnails from Google Books API
    const fetchThumbnails = async () => {
      try {
        const promises = trimName.map((bookName) =>
          fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`)
            .then((response) => response.json())
            .then((data) => {
              if (data.items && data.items.length > 0) {
                const imageLinks = data.items[0].volumeInfo.imageLinks;
                return imageLinks ? imageLinks.smallThumbnail : null;
              }
              return null;
            })
        );

        const thumbnails = await Promise.all(promises);
        setBookThumbnails(thumbnails.filter(Boolean)); // Filter out any null values
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchThumbnails();
  }, [bookNameTrim]);

  // Scroll to the new BookRecs component when bookThumbnails changes
  useEffect(() => {
    if (bookRecsRef.current && bookThumbnails.length) {
      bookRecsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [bookThumbnails]);

  return bookThumbnails.length ? (
    <div ref={bookRecsRef}>
      <BookRecs thumbnails={bookThumbnails} />
    </div>
  ) : null;
};

export default BookImageFetch;
