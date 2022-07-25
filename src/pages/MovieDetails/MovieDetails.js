import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { movieDetails } from '../../services/api';
import { useState, useEffect } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';
import {
  Container,
  DetailsWrapper,
  LinkWrapper,
  LinkBack,
  GenresList,
  MovieDetail,
  Rating,
  LowRating,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    movieDetails(movieId).then(data => setMovieDetail(data));
  }, [movieId]);

  const { original_title, overview, genres, poster_path, vote_average } =
    movieDetail;

  return (
    <main>
      <Container>
        <LinkBack to={location.state?.from ?? '/'}>
          <MdOutlineArrowBack size={20} />
          Back to list
        </LinkBack>
        <DetailsWrapper>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : `https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg`
            }
            alt="title"
            width={300}
            height={400}
            loading="lazy"
          />
          <MovieDetail>
            <h2>{original_title}</h2>
            <h4>
              Rating:{' '}
              {vote_average > 6 ? (
                <Rating>{vote_average}</Rating>
              ) : (
                <LowRating>{vote_average}</LowRating>
              )}
            </h4>
            <h4>Overview</h4>
            <p>{overview} </p>
            <h4>Genres</h4>
            <GenresList>
              {genres &&
                genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </GenresList>
          </MovieDetail>
        </DetailsWrapper>
        <LinkWrapper>
          <h4>Additional information</h4>
          <Link to="cast" state={{ ...location.state } || { from: location }}>
            Cast
          </Link>
          <Link
            to="reviews"
            state={{ ...location.state } || { from: location }}
          >
            Reviews
          </Link>
        </LinkWrapper>
        <Outlet />
      </Container>
    </main>
  );
};

export default MovieDetails;
