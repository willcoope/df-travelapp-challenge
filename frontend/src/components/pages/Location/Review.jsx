import './Review.css';

const Review = ({ review }) => {
  return (
    <div className="review-box">
      <h3>{review.rating}/5</h3>
      <h3>{review.review}</h3>
      <h6>Posted by {review.username}</h6>
    </div>
  );
};
export default Review;
