import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

export const useMovieContext = () => {
  const movieContext = useContext(MovieContext);

  const {
    movies,
    starredMovies,
    addMovies,
    updateMovies,
    addFavourite,
    updateFavorite,
    removeFavourite,
  } = movieContext;

  return {
    movies,
    starredMovies,
    addMovies,
    updateMovies,
    updateFavorite,
    addFavourite,
    removeFavourite,
  };
};
