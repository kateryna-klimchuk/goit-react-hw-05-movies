import styled from 'styled-components';
import { searchMovies } from '../../services/api';

import { BiSearch } from 'react-icons/bi';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const SearchForm = styled.form`
  padding: 40px;
  margin-top: 20px;
  background-color: beige;
  min-width: 400px;
  display: flex;
  align-item: center;
`;

const SearchInput = styled.input`
  border: 1px solid red;
  padding: 10px;
  border-radius: 4px;
  //   &::placeholder {
  //     color: pink;
  //   }
`;

const SearchButton = styled.button`
  display: inline-block;
  width: 44px;
  height: 40px;
  border: 0;
  border-radius: 4px;
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

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  //   const [movieId, setMovieId] = useState('');

  //   useEffect(() => {
  //     searchMovies(query).then(data => setMovies(data.results));
  //   }, [query]);

  const handleInput = event => {
    event.preventDefault();
    searchMovies(query).then(data => setMovies(data.results));
  };

  const handleInputChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };
  //   const handleLinkClick = ind => {
  //     openDetail(ind);
  //   };
  return (
    <main>
      <SearchForm onSubmit={handleInput}>
        <SearchInput
          type="text"
          name="searcher"
          onChange={handleInputChange}
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SearchButton type="submit">
          <BiSearch size={18} />
        </SearchButton>
      </SearchForm>
      <ul>
        {movies.map(movie => {
          return (
            <div key={movie.id}>
              <Link to={`${movie.id}`}>
                {movie.original_title || movie.name}
              </Link>
            </div>
          );
        })}
      </ul>
      <Outlet />
    </main>
  );
};

export default Movies;
