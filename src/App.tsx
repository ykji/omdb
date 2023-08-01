import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Favorites from "./pages/Favourites";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":imdbId" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
