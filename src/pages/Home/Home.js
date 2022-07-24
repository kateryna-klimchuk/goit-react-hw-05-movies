import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styled from 'styled-components';
import { onfetch } from '../../services/api';

const HomeLink = styled(Link)`
  list-style: none;
  width: fit-content;
  text-decoration: none;
  border-bottom: 1px solid grey;
  color: grey;

  &:hover {
    padding: 6px;
    // background-color: #105b72c2;
    border-radius: 4px;
    box-shadow: 1px 2px 13px 3px rgba(0, 0, 0, 0.78);
  }
`;
const MovieList = styled.ul`
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const Home = () => {
  const [num, setNum] = useState([]);
  const location = useLocation();

  useEffect(() => {
    onfetch().then(data => {
      setNum(data.results);
    });
  }, []);

  return (
    <main>
      <MovieList>
        {num.map(movie => (
          <div key={movie.id}>
            <HomeLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.name}
            </HomeLink>
          </div>
        ))}
      </MovieList>
    </main>
  );
};

export default Home;
