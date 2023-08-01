import axios from "axios";
import { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { debounce } from "../utils/debounce";
import MovieCard from "../components/MovieCard";
import EmptyState from "../components/EmptyState";
import { useMovieContext } from "../hooks/useMovieContext";

const HomeContainer = styled.div`
  display: flex;
  margin: 4rem auto;
  max-width: 128rem;
  padding: 0 4rem;
  align-items: center;
  flex-direction: column;
`;

const Actions = styled.div`
  gap: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const OpenFavorites = styled(Link)`
  color: black;
  margin: 0 auto;
  font-weight: 500;
  font-size: 1.6rem;
  border-radius: 0.7rem;
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  background-color: white;
  box-shadow: 2px 2px 2px gray;
  border: 0.2rem solid white;

  @media (min-width: 640px) {
    margin: 0;
  }
`;

const SearchBox = styled.input`
  width: 60%;
  height: 5%;
  padding: 1.2rem;
  color: white;
  font-size: 1.6rem;
  border-radius: 1rem;
  border: 0.5px solid white;
  background-color: transparent;

  @media (min-width: 640px) {
    width: 20%;
  }
`;

export const MoviesContainer = styled.div`
  gap: 3rem;
  display: grid;
  margin-top: 4rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 640px) {
    margin-top: 6rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  }
`;

const Heading = styled.h4`
  margin-top: 4rem;
  font-size: 1.6rem;
`;

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);

  const { updateMovies } = useMovieContext();

  const fetchMovies = async (searchTerm: string, isNewSearchTerm: boolean) => {
    if (!searchTerm) {
      return;
    }
    setLoading(true);
    try {
      const result = await axios.get(
        `https://omdbapi.com/?s=${searchTerm.trim()}&apikey=9722c586&page=${page}`
      );

      const { Search, totalResults, Response, Error } = result.data;

      if (Response === "False") {
        setError(Error);
      } else {
        setError("");
        setTotalPages(Math.ceil(totalResults / 10));
        updateMovies(Search);
      }
    } catch (error: any) {
      const message = error.message;
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchMovies = debounce(fetchMovies, 300);

  const { movies } = useMovieContext();

  return (
    <HomeContainer>
      <Actions>
        <OpenFavorites to="favorites">Favorites {totalPages}</OpenFavorites>
        <SearchBox
          type="text"
          placeholder="Search movie"
          onChange={(e) => debouncedFetchMovies(e.target.value, true)}
        />
      </Actions>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <Heading>{error}</Heading>
      ) : movies.length ? (
        <div style={{ width: "100%" }}>
          <MoviesContainer>
            {movies.map((movie, index) => {
              if (index !== movies.length - 1) {
                return <MovieCard key={movie.imdbID} movie={movie} />;
              }
            })}
          </MoviesContainer>
        </div>
      ) : (
        <EmptyState message="Please search movies through the search box." />
      )}
    </HomeContainer>
  );
};

export default Home;
