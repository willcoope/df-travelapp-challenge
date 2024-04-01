import "../../Forecast.css"
import React, { useEffect, useState } from "react";
import reviewService from "../../../services/review.service";
import Review from "./Review";
const ReviewsGrid = ({ location }) => {
    const [fetchedReviews, setFetchedReviews] = useState([]);
    useEffect(() => {
        const fetchReviews = async () => {
          const reviews = await reviewService.getreviews(location);
          setFetchedReviews(reviews.reviews);
          
        };
        fetchReviews();
      }, [location]);
    return(
      <div className="white-outline" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '50px' }}>
      {fetchedReviews.length === 0 && <h1>No reviews yet!</h1>}
      {fetchedReviews.length > 0 && <h1>Reviews</h1>}
        {fetchedReviews.map((review, index) => (
          <Review key={index} review={review} />
      ))}
      </div>

    )
}

export default ReviewsGrid; 