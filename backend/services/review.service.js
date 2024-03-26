import Review from "../models/review.model.js";

const addReview = async ({ username, location, rating, review }) => {
    const newReview = new Review({ username, location, rating, review });
    await newReview.save();
    return newReview;
}

const getReviews = async () => {
    return await Review.find();
}

export const reviewService = { addReview, getReviews };