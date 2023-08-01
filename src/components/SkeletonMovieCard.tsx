import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const skeletonLoading = keyframes`
  0% {
    background-color: #474444;
  }
  100% {
    background-color: #2a2929;
  }
`;

const SkeletonCard = styled.div`
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
  border: 0.05rem solid #393737;

  @media (min-width: 640px) {
    margin: 0;
    width: 100%;
  }
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

const SkeletonInfo = styled.div`
  width: 85%;
  color: #c8c2c2;
  padding: 0 3rem;
  margin-top: 1rem;
  overflow: hidden;
`;

const SkeletonText = styled.div`
  height: 1.6rem;
  border-radius: 0.6rem;
  margin-bottom: 0.8rem;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

const SkeletonMovieCard = () => {
  return (
    <SkeletonCard>
      <SkeletonImage />
      <SkeletonInfo>
        <SkeletonText style={{ width: "80%" }} />
        <SkeletonText style={{ width: "50%" }} />
        <SkeletonText style={{ width: "30%" }} />
      </SkeletonInfo>
    </SkeletonCard>
  );
};

export default SkeletonMovieCard;
