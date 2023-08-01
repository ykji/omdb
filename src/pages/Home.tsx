import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import MovieCard from "../components/MovieCard";
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

const MoviesContainer = styled.div`
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

const Home = () => {
  const fetchMovies = (searchTerm: string) => {
    console.log(searchTerm);
  };

  const { movies } = useMovieContext();

  return (
    <HomeContainer>
      <Actions>
        <OpenFavorites to="favorites">Favorites</OpenFavorites>
        <SearchBox
          type="text"
          placeholder="Search movie"
          onChange={(e) => fetchMovies(e.target.value)}
        />
      </Actions>
      <div style={{ width: "100%" }}>
        <MoviesContainer>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </MoviesContainer>
      </div>
    </HomeContainer>
  );
};

export default Home;
