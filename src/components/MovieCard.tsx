import styled from "@emotion/styled";
import { Movie } from "../interfaces/movie";
import { AiFillHeart } from "react-icons/ai";

interface Props {
  movie: Movie;
}

const Card = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;
  align-items: start;
  border-radius: 2rem;
  padding-bottom: 1rem;
  flex-direction: column;
  border: 0.05rem solid white;

  @media (min-width: 640px) {
    margin: 0;
    width: 100%;
  }
`;

const FavIconWrapper = styled.div`
  z-index: 3;
  right: 2rem;
  top: 31rem;
  position: absolute;
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
  const { Title, Poster, Year, Type } = props.movie;

  return (
    <Card>
      <Image src={Poster} alt={Title} />
      <Details>
        <MovieTitle>{Title}</MovieTitle>
        <MovieType>{Type}</MovieType>
        <MovieYear>{Year}</MovieYear>
      </Details>
      <FavIconWrapper>
        <AiFillHeart size={30} />
      </FavIconWrapper>
    </Card>
  );
};

export default MovieCard;
