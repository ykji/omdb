import styled from "@emotion/styled";

interface Props {
  message: string;
}

const EmptyState = (props: Props) => {
  const { message } = props;

  const MessageContainer = styled.p`
    width: 100%;
    color: gray;
    max-width: 80%;
    font-size: 1.6rem;
    margin-top: 6rem;
    text-align: center;
  `;

  return <MessageContainer>{message}</MessageContainer>;
};

export default EmptyState;
