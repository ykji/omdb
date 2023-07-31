import styled from "@emotion/styled";

const Nav = styled.nav`
  height: 5rem;
  display: flex;
  font-size: 2rem;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  border-bottom: 0.1rem solid;
`;

const Navbar = () => {
  return <Nav>OMDB</Nav>;
};

export default Navbar;
