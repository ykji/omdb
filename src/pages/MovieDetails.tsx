import axios from "axios";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../interfaces/movie";
import SkeletonMovieDetails from "../components/SkeletonMovieDetails";

const Container = styled.div`
  display: flex;
  padding: 0 4rem;
  margin: 4rem auto;
  max-width: 128rem;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const DetailsWrapper = styled.div`
  gap: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 640px) {
    padding: 0 12rem;
    gap: 5rem;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2.8rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    gap: 3rem;
    flex-direction: row;
  }
`;

const Image = styled.img`
  height: 30rem;
  max-width: 30rem;
  object-fit: cover;
  transition: all 0.3s;
  border-radius: 2rem;

  @media (min-width: 640px) {
    height: 50rem;
    max-width: 40rem;

    &:hover {
      scale: 1.1;
    }
  }
`;

const Column = styled.div`
  gap: 1rem;
  display: flex;
  color: gray;
  padding: 4rem 0;
  font-size: 2.4rem;
  flex-direction: column;

  @media (min-width: 640px) {
    font-size: 3.2rem;
    gap: 2rem;
  }
`;

const MovieDetails = () => {
  const { imdbId } = useParams();
  const [movie, setMovie] = useState<Movie>({
    Year: "",
    Type: "",
    Title: "",
    Poster: "",
    imdbID: "",
    isFavorite: false,
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const result = await axios.get(
          `https://omdbapi.com/?i=${imdbId}&apikey=9722c586`
        );

        const { data } = result;
        setMovie(data);
      } catch (error: any) {
        const message = error.message;
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, []);

  const { Title, Poster, Language, Director, Genre, Actors, Type, Year } =
    movie!;

  return (
    <Container>
      {error && <Heading>{error}</Heading>}
      {loading && <SkeletonMovieDetails />}
      {!error && !loading && (
        <DetailsWrapper>
          <Heading>{Title}</Heading>
          <Details>
            <Image src={Poster} alt={Title} />
            <Column>
              <p>{`Type: ${Type.toUpperCase()}`}</p>
              <p>{`Genre: ${Genre}`}</p>
              <p>{`Director: ${Director}`}</p>
              <p>{`Starcast: ${Actors}`}</p>
              <p>{`Year: ${Year}`}</p>
              <p>{`Language: ${Language}`}</p>
            </Column>
          </Details>
        </DetailsWrapper>
      )}
    </Container>
  );
};

export default MovieDetails;
