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
