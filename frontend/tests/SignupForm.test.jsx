import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import SignupForm from "../src/components/pages/Signup/SignupForm";
import authService from "../src/services/auth.service";

vi.mock("../src/services/auth.service", () => ({
  default: {
    signup: vi.fn(),
  },
}));

test("renders the signup form", () => {
  render(
    <BrowserRouter>
      <SignupForm />
    </BrowserRouter>
  );
  const signup = screen.getByRole("button");
  expect(signup).toBeInTheDocument();
});

test("should call the signup function with the inputted data when the button is clicked", async () => {
  authService.signup.mockResolvedValue({
    user: {
      _id: "1",
      username: "test",
      password: "password",
    },
  });
  render(
    <BrowserRouter>
      <SignupForm />
    </BrowserRouter>
  );
  const username = screen.getByPlaceholderText(/username.../i);
  const password = screen.getByPlaceholderText(/password.../i);
  await userEvent.type(username, "test");
  await userEvent.type(password, "password");
  const signup = screen.getByRole("button");
  await userEvent.click(signup);
  expect(authService.signup).toHaveBeenCalledWith("test", "password");
});
