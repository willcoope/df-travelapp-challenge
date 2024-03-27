import { render, screen } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import ReviewsGrid from "../src/components/pages/Location/ReviewsGrid";
import reviewService from "../src/services/review.service";

vi.mock("../src/services/review.service", () => ({
  default: {
    getreviews: vi.fn(),
  },
}));

test("should call the getreviews function when the location is passed", async () => {
  const location = "london";
  const reviews = {
    reviews: [
      {
        _id: "1",
        location: "london",
        review: "Great place",
        rating: 5,
      }
    ],
  };
  reviewService.getreviews.mockResolvedValue(reviews);
  await act(async () => {
    render(<ReviewsGrid location="london" />);
  });
  expect(reviewService.getreviews).toHaveBeenCalledWith(location);
});
