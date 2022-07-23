import axios from 'axios';

const API_KEY = '532c56a8c591a340308597d9f66fd331';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const onfetch = async () => {
  const fetchList = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  return fetchList.data;
};

// const SearchUrl = `https://api.themoviedb.org/3/search/movie?query=batman&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
export const searchMovies = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );
  return response.data;
};

export const movieDetails = async movie_id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
