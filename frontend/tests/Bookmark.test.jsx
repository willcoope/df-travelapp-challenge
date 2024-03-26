import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Bookmark from "../src/components/pages/Location/Bookmark";
import authService from "../src/services/auth.service";

vi.mock("../src/services/auth.service", () => ({
  default: {
    addFavourite: vi.fn(),
    removeFavourite: vi.fn(),
  },
}));

test("should call the addFavourite function when the button is clicked and favourite not in favourites", async () => {
  const userItem = {
      _id: "1",
      username: "test",
      password: "password",
      favourites: [],
  };
  localStorage.setItem("user", JSON.stringify(userItem));
  authService.addFavourite.mockResolvedValue({
      _id: "1",
      username: "test",
      password: "password",
      favourites: ["london"],
  });
  render(<Bookmark name="london" setRefresh={vi.fn()} />);
  const button = screen.getByRole("button");
  await userEvent.click(button);
  expect(authService.addFavourite).toHaveBeenCalledWith(
      userItem.username,
      userItem.password,
      "london"
  );
});

test("should call the removeFavourite function when the button is clicked and favourite already in favourites", async () => {
  const userItem = {
      _id: "1",
      username: "test",
      password: "password",
      favourites: ["london"],
  };
  localStorage.setItem("user", JSON.stringify(userItem));
  authService.removeFavourite.mockResolvedValue({
      _id: "1",
      username: "test",
      password: "password",
      favourites: [],
  });
  render(<Bookmark name="london" setRefresh={vi.fn()} />);
  const button = screen.getByRole("button");
  await userEvent.click(button);
  expect(authService.removeFavourite).toHaveBeenCalledWith(
      userItem.username,
      userItem.password,
      "london"
  );
});