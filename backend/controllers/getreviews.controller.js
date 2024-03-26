import { reviewService } from "../services/review.service.js";

export const getreviewsController = async (req, res) => {
  try {
    const reviews = await reviewService.getReviews();
    res.status(200).send(reviews);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
