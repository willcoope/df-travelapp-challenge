import Review from "../models/review.model.js";

const addreview = async ({ username, location, rating, review }) => {
    const newReview = new Review({ username, location, rating, review });
    await newReview.save();
    return newReview;
}

const getreviews = async ({location}) => {
    return await Review.find({ location });
}

export const reviewService = { addreview, getreviews };