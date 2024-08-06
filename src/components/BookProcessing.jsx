/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import useStore from "../store"; // Importing Zustand store
import { GoogleGenerativeAI } from "@google/generative-ai"; // Importing Google Gemini API

const BookProcessing = ({ data }) => {
  const API_KEY = import.meta.env.VITE_API_KEY; // The API key will be defined in the .env file
  const [apiResp, setApiResp] = useState([]); // State for storing the Gemini API response
  const [apiErr, setApiErr] = useState("");

  const setBookDetails = useStore((state) => state.setBookDetails); // Zustand action to update the store

  useEffect(() => {
    const genAI = new GoogleGenerativeAI(API_KEY);

    // Function to fetch three books based on the books submitted by the user
    async function fetchRecommendations() {
      try {
        // model can be changed to whatever Gemini API model you are using. generationConfig is used to ensure that the response contains json format
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          generationConfig: { responseMimeType: "application/json" },
        });
        const prompt = `Given books ${data.book1}, ${data.book2}, and ${data.book3}, provide three book recommendations excluding these three. Return a JSON array with three book recommendations in this format: [{ "book": "book name", "author": "author of the book", "description": "One or two sentence describing the book and one sentence explaining why it was chosen based on the user's preferences."}]`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();

        // Wrap response in brackets if needed and parse as JSON
        const formattedText = text.trim();
        const jsonResp = JSON.parse(formattedText);

        // Update Zustand store
        setBookDetails(jsonResp);

        // Update state
        setApiResp(jsonResp);
      } catch (error) {
        console.error("Error generating content:", error);
        setApiErr(error);
      }
    }

    fetchRecommendations();
  }, [API_KEY, data, setBookDetails]);

  return apiErr.length ? (
    <p>Sorry, the books could not be fetched. Please try again later.</p>
  ) : null;
};

export default BookProcessing;
