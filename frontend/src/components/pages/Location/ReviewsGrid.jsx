import "../../Forecast.css"
import React, { useEffect, useState } from "react";
import reviewService from "../../../services/review.service";
import Review from "./Review";
const ReviewsGrid = ({ location, setRefresh }) => {
    const [fetchedReviews, setFetchedReviews] = useState([]);
    useEffect(() => {
        const fetchReviews = async () => {
          const reviews = await reviewService.getreviews(location);
          setFetchedReviews(reviews.reviews);
          
        };
        fetchReviews();
      }, [location]);
    console.log(fetchedReviews);
    return(
      <>
      {fetchedReviews.length === 0 && <h1>No reviews yet!</h1>}
        <h1>Reviews:</h1>
        {fetchedReviews.map((review, index) => (
          // <h1>{review.review}</h1>
          <Review key={index} review={review} />
        // <Favourite key={index} name={toTitleCase(bookmark)} setRefresh={setRefresh} />

      ))}
      </>

    )
}

export default ReviewsGrid; 