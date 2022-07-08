import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home Page", () => {
  beforeEach(() => {
    render(<Home />);
  });

  test("Renders Title", () => {
    expect(screen.getByRole("title")).toBeInTheDocument();
  });
});
