import { Routes, Route } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
export default App;
