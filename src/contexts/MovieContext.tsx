import { ReactNode, createContext, useState } from "react";
import { Movie } from "../interfaces/movie";

interface MovieContextType {
  movies: Movie[];
  starredMovies: Movie[];
  addMovies: (movies: Movie[]) => void;
  addFavourite: (movie: Movie) => void;
  updateMovies: (movies: Movie[]) => void;
  removeFavourite: (movie: Movie) => void;
}

export const MovieContext = createContext<MovieContextType>(
  {} as MovieContextType
);

interface Props {
  children: ReactNode;
}

const MovieProvider = (props: Props) => {
  const [movies, setMovies] = useState<Movie[]>([
    {
      Title: "The Hangover",
      Year: "2009",
      imdbID: "tt1119646",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Hangover Part II",
      Year: "2011",
      imdbID: "tt1411697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM2MTM4MzY2OV5BMl5BanBnXkFtZTcwNjQ3NzI4NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Hangover Part III",
      Year: "2013",
      imdbID: "tt1951261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTA0NjE1MzMzODheQTJeQWpwZ15BbWU3MDY4MTQ3Mzk@._V1_SX300.jpg",
    },
    {
      Title: "Hangover Square",
      Year: "1945",
      imdbID: "tt0037761",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTBkODMzMjEtMGI5ZS00NGVjLWE3ZGYtNWEzOWJmMjk2ZmNkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Last Hangover",
      Year: "2018",
      imdbID: "tt9476490",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGQ2MDJjNjctZGZiNy00YTA3LWJjOTUtMGUwOTM5ZTBjMWYzXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SX300.jpg",
    },
  ]);
  const [starredMovies, setStarredMovies] = useState<Movie[]>([]);

  const addMovies = (movies: Movie[]) => {
    setMovies((prev) => [...prev, ...movies]);
  };

  const updateMovies = (movies: Movie[]) => {
    setMovies(movies);
  };

  const addFavourite = (movie: Movie) => {
    setStarredMovies([...starredMovies, movie]);
  };

  const removeFavourite = (movie: Movie) => {
    setStarredMovies((prev) => {
      return prev.filter((curr) => curr.imdbID !== movie.imdbID);
    });
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        starredMovies,
        addMovies,
        updateMovies,
        addFavourite,
        removeFavourite,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
