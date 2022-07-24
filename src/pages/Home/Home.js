import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HomeLink, MovieList, Title } from './Home.styled';

import { onfetch } from '../../services/api';

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
      <Title>Top Movies for today</Title>
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
