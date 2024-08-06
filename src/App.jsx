import "./App.css";
import Header from "./components/Header";
import TextSection from "./components/TextSection";
import BookForm from "./components/BookForm";
import BookImageFetch from "./components/BookImageFetch";
import ReactGA from "react-ga4"; //importing Google Analytics functionalities

function App() {
  // Google Analytics
  ReactGA.initialize(import.meta.env.VITE_ANALYTICS_ID);
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
  // Please remove the code block above if you are not using Google Analytics

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
