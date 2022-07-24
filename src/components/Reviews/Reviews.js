import { fetchReview } from '../../services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReview(movieId).then(data => setReview(data.results));
  }, [movieId]);

  return (
    <div>
      <ul>
        {review.length > 0
          ? review.map(el => (
              <li key={el.id}>
                <p>Author: "{el.author}"</p>
                <p>Review: {el.content}</p>
              </li>
            ))
          : "We don't have any review for this movie"}
      </ul>
    </div>
  );
};

export default Reviews;
