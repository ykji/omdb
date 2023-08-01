import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

export const useMovieContext = () => {
  const movieContext = useContext(MovieContext);

  const {
    movies,
    addMovies,
    updateMovies,
    updateFavorite,
  } = movieContext;

  return {
    movies,
    addMovies,
    updateMovies,
    updateFavorite,
  };
};
