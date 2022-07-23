import { useParams } from 'react-router-dom';
import { movieDetails } from '../../services/api';
import { useState, useEffect } from 'react';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    movieDetails(movieId).then(data => setMovieDetail(data));
  }, [movieId]);

  return (
    <main>
      <div>
        Now showing movie with {movieDetail.id} and
        {movieDetail.original_title}
      </div>
    </main>
  );
};

export default MovieDetails;
