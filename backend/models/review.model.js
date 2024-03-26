import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    username: {type: String, required: true},
    location: {type: String, required: true},
    rating: {type: Number, required: true},
    review: {type: String, required: true}
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;