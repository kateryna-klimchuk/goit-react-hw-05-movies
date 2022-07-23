import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { onfetch } from '../../services/api';

const HomeLink = styled(Link)`
  list-style: none;
  padding: 20px;
  width: fit-content;
  text-decoration: none;

  &:hover {
    background-color: #105b72c2;
    border-radius: 4px;
    transform: scale(1.1);
  }
`;
const MovieList = styled.ul`
  padding: 20px;
`;

const Home = () => {
  const [num, setNum] = useState([]);

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
            <HomeLink to={movie.id}>
              {movie.original_title || movie.name}
            </HomeLink>
          </div>
        ))}
      </MovieList>
    </main>
  );
};

export default Home;
