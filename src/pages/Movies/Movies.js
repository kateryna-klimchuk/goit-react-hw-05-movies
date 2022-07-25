import { useState, useEffect, Suspense } from 'react';
import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
import Loader from 'components/Loader';

import { searchMovies } from '../../services/api';
import Form from 'components/SearchForm';
import { List, SearchLink } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    searchMovies(movieName).then(data => setMovies(data.results));
  }, [movieName]);

  const handleSubmit = event => {
    event.preventDefault();
    const searchForm = event.currentTarget;
    setSearchParams({ movieName: searchForm.elements.movieName.value });
    searchForm.reset();
  };

  return (
    <main>
      <Form handleSubmit={handleSubmit} />
      <List>
        {movies.length > 0 &&
          movies.map(movie => {
            return (
              <div key={movie.id}>
                <SearchLink
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                >
                  {movie.original_title || movie.name}
                </SearchLink>
              </div>
            );
          })}
      </List>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Movies;
