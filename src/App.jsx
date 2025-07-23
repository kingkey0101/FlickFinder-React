import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./components/SearchResults";
import BrowseMore from "./components/BrowseMore";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/browse:query" element={<BrowseMore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
