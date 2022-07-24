import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Nav, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Outlet />
    </Container>
  );
};
export default SharedLayout;
