import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from '../../services/api';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieCast(movieId).then(data => setCastList(data.cast));
  }, [movieId]);
  return (
    <div>
      <ul>
        {castList.map(el => (
          <li key={el.id}>
            <img
              src={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/w200${el.profile_path}`
                  : `https://thumbs.dreamstime.com/z/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg`
              }
              alt="title"
              loading="lazy"
            />
            <h3>{el.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
