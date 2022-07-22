import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

describe("Not Found Page", () => {
  beforeEach(() => {
    render(<NotFound />);
  });

  test("Renders title", () => {
    expect(screen.getByRole("title")).toBeInTheDocument();
  });

  test("Renders subtitle", () => {
    expect(screen.getByRole("subtitle")).toBeInTheDocument();
  });

  test("Renders image", () => {
    expect(screen.getByRole("image")).toBeInTheDocument();
  });
});
