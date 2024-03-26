import { reviewService } from "../services/review.service.js";

export const getreviewsController = async (req, res) => {
  try {
    console.log("controller", req.body);
    const reviews = await reviewService.getreviews(req.body);
    res.status(200).send({ message: `Favourites fetched`, reviews });
  } catch (error) {
    res.status(400).send({ message: error.message, review: req.body});
  }
};
