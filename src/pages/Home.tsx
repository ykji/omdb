import styled from "@emotion/styled";
import { useMovieContext } from "../hooks/useMovieContext";
import MovieCard from "../components/MovieCard";

const HomeContainer = styled.div`
  display: flex;
  margin: 4rem auto;
  max-width: 128rem;
  padding: 0 4rem;
  align-items: center;
  flex-direction: column;
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
      <SearchBox
        type="text"
        placeholder="Search movie"
        onChange={(e) => fetchMovies(e.target.value)}
      />
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
