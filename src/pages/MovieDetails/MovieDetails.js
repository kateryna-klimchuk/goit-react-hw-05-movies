import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { movieDetails } from '../../services/api';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdOutlineArrowBack } from 'react-icons/md';

const Container = styled.div`
  padding: 20px;
`;

const DetailsWrapper = styled.div`
  padding-bottom: 20px;
  display: flex;
  column-gap: 40px;
`;
const LinkWrapper = styled.div`
  border-top: 1px solid grey;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-top: 10px;
`;

const LinkBack = styled(Link)`
  display: flex;
  padding: 20px;
  font-size: 18px;
  align-items: center;
  column-gap: 10px;
`;

const GenresList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  column-gap: 10px;
`;

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    movieDetails(movieId).then(data => setMovieDetail(data));
  }, [movieId]);

  const { original_title, overview, genres, poster_path } = movieDetail;

  return (
    <main>
      <Container>
        {/* <Link to={location.state?.from ?? `/movies`}> */}
        <LinkBack to={location.state?.from ?? ''}>
          <MdOutlineArrowBack size={20} />
          Back to list
          {/* <HiArrowLeft size="24" /> */}
          {/* {children} */}
        </LinkBack>
        <DetailsWrapper>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : `https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg`
            }
            alt="title"
            loading="lazy"
          />
          <div>
            <h2>{original_title}</h2>
            <h4>Overview</h4>
            <p>{overview} </p>
            <h4>Genres</h4>
            <GenresList>
              {genres &&
                genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </GenresList>
          </div>
        </DetailsWrapper>
        <LinkWrapper>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </LinkWrapper>
        <Outlet />
      </Container>
    </main>
  );
};

export default MovieDetails;
