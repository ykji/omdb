import { MouseEvent } from "react";
import styled from "@emotion/styled";
import { Movie } from "../interfaces/movie";
import { AiFillHeart } from "react-icons/ai";
import { useMovieContext } from "../hooks/useMovieContext";
import { Link } from "react-router-dom";

interface Props {
  movie: Movie;
}

const Card = styled(Link)`
  width: 80%;
  display: flex;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;
  align-items: start;
  border-radius: 2rem;
  padding-bottom: 1rem;
  text-decoration: none;
  flex-direction: column;
  border: 0.05rem solid gray;

  @media (min-width: 640px) {
    margin: 0;
    width: 100%;
  }
`;

const FavIconWrapper = styled.div`
  z-index: 3;
  top: 31rem;
  right: 2rem;
  cursor: pointer;
  position: absolute;
  color: ${(props) => props.color};
`;

const Image = styled.img`
  height: 30rem;
  width: 100%;
  object-fit: cover;
  transition: all 0.3s;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;

  @media (min-width: 640px) {
    &:hover {
      scale: 1.1;
    }
  }
`;

const Details = styled.div`
  width: 85%;
  color: #c8c2c2;
  padding: 0 3rem;
  margin-top: 1rem;
  overflow: hidden;
`;

const MovieTitle = styled.p`
  width: 100%;
  font-weight: 500;
  font-size: 1.6rem;
`;

const MovieYear = styled.p`
  font-size: 1.2rem;
`;

const MovieType = styled.p`
  font-size: 1.2rem;
  text-transform: capitalize;
`;

const MovieCard = (props: Props) => {
  const { Title, Poster, Year, Type, isFavorite, imdbID } = props.movie;
  const { updateFavorite } = useMovieContext();

  const handleUpdateFavorite = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    updateFavorite(imdbID);
  };

  return (
    <Card to={`/${imdbID}`}>
      <Image src={Poster} alt={Title} />
      <Details>
        <MovieTitle>{Title}</MovieTitle>
        <MovieType>{Type}</MovieType>
        <MovieYear>{Year}</MovieYear>
      </Details>
      <FavIconWrapper
        color={isFavorite ? "red" : "white"}
        onClick={(e) => handleUpdateFavorite(e)}
      >
        <AiFillHeart size={30} />
      </FavIconWrapper>
    </Card>
  );
};

export default MovieCard;
