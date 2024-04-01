import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import ReviewForm from "../src/components/pages/Location/ReviewForm";
import reviewService from "../src/services/review.service";

vi.mock("../src/services/review.service", () => ({
    default: {
        addReview: vi.fn(),
    },
    }));

test("renders the review form", () => {
    render(
        <BrowserRouter>
            <ReviewForm />
        </BrowserRouter>
    );
    const review = screen.getByRole("button");
    expect(review).toBeInTheDocument();
});

test("submits a review", async () => {
    localStorage.setItem('user', JSON.stringify({ username: 'test' }))
    reviewService.addReview.mockResolvedValue({
        review: {
            _id: "1",
            username: "test",
            location: "test",
            review: "Great place!",
            rating: "5",
        },
    });
    render(
        <BrowserRouter>
            <ReviewForm location="test" />
        </BrowserRouter>
    );
    const rating = screen.getByRole("combobox");
    const review = screen.getByRole("textbox");
    const submit = screen.getByRole("button");
    await userEvent.selectOptions(rating, "5");
    await userEvent.type(review, "Great place!");
    await userEvent.click(submit);
    expect(reviewService.addReview).toHaveBeenCalled();
});
