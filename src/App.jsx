import "./App.css";
import Header from "./components/Header";
import TextSection from "./components/TextSection";
import BookForm from "./components/BookForm";
import BookImageFetch from "./components/BookImageFetch";

function App() {
  return (
    <div>
      <Header />
      <TextSection />
      <BookForm />
      <BookImageFetch />
    </div>
  );
}

export default App;
