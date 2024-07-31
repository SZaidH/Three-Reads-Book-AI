/* eslint-disable no-unused-vars */
// State management using Zustand to store Book Details and loading animation boolean
import { create } from "zustand";

const useStore = create((set) => ({
  bookDetails: [],
  isLoading: false,
  setBookDetails: (bookDetails) =>
    set((state) => ({ bookDetails: bookDetails })),
  setLoading: (loading) => set((state) => ({ isLoading: loading })),
}));

export default useStore;
