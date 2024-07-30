/* eslint-disable no-unused-vars */
// State management using Zustand to store Book Details
import { create } from "zustand";

const useStore = create((set) => ({
  bookDetails: [],
  setBookDetails: (bookDetails) =>
    set((state) => ({ bookDetails: bookDetails })),
}));

export default useStore;
