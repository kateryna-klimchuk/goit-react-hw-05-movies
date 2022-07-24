import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  width: 100vw;
  height: 100vh;
`;
const Header = styled.header`
  padding: 40px;

  box-shadow: 1px 2px 13px 3px rgba(0, 0, 0, 0.78);
`;

const Nav = styled.nav`
  display: flex;
  column-gap: 20px;
`;

const Link = styled(NavLink)`
  padding: 8px 26px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  width: fit-content;
  box-shadow: 1px 2px 5px 3px rgba(0, 0, 0, 0.78);

  &.active {
    color: white;
    background-color: orangered;
  }
`;
const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Outlet />
    </Container>
  );
};
export default SharedLayout;
