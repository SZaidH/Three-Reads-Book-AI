import { useState, useEffect } from "react";
// Importing Google Gemini API
import { GoogleGenerativeAI } from "@google/generative-ai";

const BookProcessing = ({ data }) => {
  const API_KEY = import.meta.env.VITE_API_KEY; // The API key will be defined in the .env file
  const [apiResp, setApiResp] = useState([]); // State for storing the Gemini API response
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const genAI = new GoogleGenerativeAI(API_KEY);

    // Function to fetch three books based on the books submitted by the user
    async function fetchRecommendations() {
      try {
        //model can be changed to whatever Gemini API model you are using. generationConfig is used to ensure that the response contains json format
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          generationConfig: { responseMimeType: "application/json" },
        });
        const prompt = `Given books ${data.book1}, ${data.book2}, and ${data.book3}, provide three book recommendations excluding these three. Return only a JSON array with three book recommendations in this format: [{ "book": "book name", "author": "author of the book", "description": "One sentence describing the book and also one sentence that explains why this book was chosen for the user based on the books they like."}]`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();

        // Wrap response in brackets if needed and parse as JSON
        const formattedText = text.trim();
        const jsonResp = JSON.parse(formattedText);

        setApiResp(jsonResp);
      } catch (error) {
        console.error("Error generating content:", error);
        setError("Failed to fetch recommendations.");
      }
    }

    fetchRecommendations();
  }, [data, API_KEY]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : apiResp.length ? (
        apiResp.map((book, index) => (
          <div key={index}>
            <h2>{book.book}</h2>
            <p>
              <strong>Author:</strong> {book.author}
            </p>
            <p>
              <strong>Description:</strong> {book.description}
            </p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookProcessing;
