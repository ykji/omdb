import { ReactNode, createContext, useState } from "react";
import { Movie } from "../interfaces/movie";

interface MovieContextType {
  movies: Movie[];
  updateFavorite: (id: string) => void;
  addMovies: (movies: Movie[]) => void;
  updateMovies: (movies: Movie[]) => void;
}

export const MovieContext = createContext<MovieContextType>(
  {} as MovieContextType
);

interface Props {
  children: ReactNode;
}

const MovieProvider = (props: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovies = (newMovies: Movie[]) => {
    const updatedMovies = [...movies, ...newMovies];
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
    setMovies(updatedMovies);
  };

  const updateMovies = (movies: Movie[]) => {
    localStorage.setItem("movies", JSON.stringify(movies));
    setMovies(movies);
  };

  const updateFavorite = (id: string) => {
    const movieIndex = movies.findIndex((movie) => movie.imdbID === id);

    if (movieIndex !== -1) {
      const updatedMovies = [...movies];
      updatedMovies[movieIndex].isFavorite =
        !updatedMovies[movieIndex].isFavorite;
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
      setMovies(updatedMovies);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        addMovies,
        updateMovies,
        updateFavorite,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
