import styled from "@emotion/styled";
import { MoviesContainer } from "./Home";
import { useEffect, useState } from "react";
import { Movie } from "../interfaces/movie";
import { useMovieContext } from "../hooks/useMovieContext";
import MovieCard from "../components/MovieCard";
import EmptyState from "../components/EmptyState";

const FavoritesContainer = styled.div`
  display: flex;
  margin: 4rem auto;
  max-width: 128rem;
  padding: 0 4rem;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 2.8rem;
`;

const Favourites = () => {
  const [favMovies, setFavMovies] = useState<Movie[]>([]);
  const { movies } = useMovieContext();

  useEffect(() => {
    setFavMovies(movies.filter((movie) => movie.isFavorite));
  }, [movies]);

  return (
    <FavoritesContainer>
      <Heading>Favorites</Heading>
      {favMovies.length ? (
        <div style={{ width: "100%" }}>
          <MoviesContainer>
            {favMovies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </MoviesContainer>
        </div>
      ) : (
        <EmptyState message="You have not marked any movies as favorite yet." />
      )}
    </FavoritesContainer>
  );
};

export default Favourites;
