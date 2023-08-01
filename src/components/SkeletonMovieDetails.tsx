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

const SkeletonDetailsWrapper = styled.div`
  gap: 3rem;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 640px) {
    padding: 0 12rem;
    gap: 5rem;
  }
`;

const SkeletonHeading = styled.div`
  height: 8%;
  width: 50%;
  border-radius: 1rem;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

const SkeletonDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  @media (min-width: 640px) {
    gap: 3rem;
    flex-direction: row;
  }
`;

const SkeletonImage = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 2rem;
  animation: ${skeletonLoading} 1s linear infinite alternate;

  @media (min-width: 640px) {
    height: 50rem;
    max-width: 40rem;
  }
`;

const SkeletonColumn = styled.div`
  height: 100%;
  width: 100%;
  gap: 1rem;
  display: flex;
  color: gray;
  padding: 4rem 0;
  font-size: 2.4rem;
  flex-direction: column;

  @media (min-width: 640px) {
    gap: 2rem;
  }
`;

const SkeletonText = styled.div`
  height: 2.8rem;
  border-radius: 0.6rem;
  margin-bottom: 0.8rem;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

const SkeletonMovieDetails = () => {
  return (
    <SkeletonDetailsWrapper>
      <SkeletonHeading />
      <SkeletonDetails>
        <SkeletonImage />
        <SkeletonColumn>
          <SkeletonText style={{ width: "80%" }} />
          <SkeletonText style={{ width: "70%" }} />
          <SkeletonText style={{ width: "65%" }} />
          <SkeletonText style={{ width: "50%" }} />
          <SkeletonText style={{ width: "70%" }} />
          <SkeletonText style={{ width: "30%" }} />
        </SkeletonColumn>
      </SkeletonDetails>
    </SkeletonDetailsWrapper>
  );
};

export default SkeletonMovieDetails;
