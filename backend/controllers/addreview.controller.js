import { reviewService } from "../services/review.service.js";

export const addreviewController = async (req, res) => {
  try {
    const review = await reviewService.addreview(req.body);
    res.status(201).send({ message: "Review added successfully", review });
  } catch (error) {
    res.status(400).send({ message: error.message, review: req.body });
  }
};
