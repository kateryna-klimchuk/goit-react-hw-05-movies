import { Routes, Route } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout';
import Home from 'components/Home';
import Movies from 'components/Movies';
import MovieDetails from 'components/MovieDetails';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

// const API_KEY = '532c56a8c591a340308597d9f66fd331';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path="movies/:movieId" element={<MovieDetails />} />
            <Route path="movies/:movieId/cast" element={<Cast />} />
            <Route path="movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
export default App;
