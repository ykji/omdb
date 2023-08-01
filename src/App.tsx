import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Favorites from "./pages/Favourites";
import MovieDetails from "./pages/MovieDetails";
import { useMovieContext } from "./hooks/useMovieContext";

function App() {
  const { updateMovies } = useMovieContext();

  useEffect(() => {
    const storedMovies = sessionStorage.getItem("movies");
    if (storedMovies) {
      updateMovies(JSON.parse(storedMovies));
    }
  }, []);

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
