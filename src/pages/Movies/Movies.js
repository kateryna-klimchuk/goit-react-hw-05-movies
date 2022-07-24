import styled from 'styled-components';
import { searchMovies } from '../../services/api';

import { BiSearch } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import { Link, Outlet, useSearchParams, useLocation } from 'react-router-dom';

const SearchForm = styled.form`
  padding-top: 20px;
  margin-top: 20px;
  min-width: 400px;
  display: flex;
  align-item: center;
`;

const SearchInput = styled.input`
  border: 1px solid grey;
  padding: 10px 20px;
  //   border-radius: 4px;
  //   &::placeholder {
  //     color: pink;
  //   }
`;

const SearchButton = styled.button`
  display: inline-block;
  width: 44px;
  height: 40px;
  border: 0;
  //   border-radius: 4px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: orangered;
  color: white;
  &:hover {
    opacity: 1;
  }
`;
const MovieList = styled.ul`
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
const SearchLink = styled(Link)`
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
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="movieName"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SearchButton type="submit">
          <BiSearch size={18} />
        </SearchButton>
      </SearchForm>
      <MovieList>
        {movies.length > 0 &&
          movies.map(movie => {
            return (
              <div key={movie.id}>
                <SearchLink to={`${movie.id}`} state={{ from: location }}>
                  {movie.original_title || movie.name}
                </SearchLink>
              </div>
            );
          })}
      </MovieList>
      <Outlet />
    </main>
  );
};

export default Movies;
