import { fetchReview } from '../../services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewList, ReviewItem, ReviewItemWrap } from './Reviews.styled';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReview(movieId).then(data => setReview(data.results));
  }, [movieId]);

  return (
    <ReviewList>
      {review.length > 0
        ? review.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <ReviewItemWrap>
                <h4>Author:</h4>
                <p>"{author}"</p>
              </ReviewItemWrap>
              <div>
                <h4>Review:</h4>
                <p>{content}</p>
              </div>
            </ReviewItem>
          ))
        : "We don't have any review for this movie"}
    </ReviewList>
  );
};

export default Reviews;
