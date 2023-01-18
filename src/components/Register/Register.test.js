import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Register from "../Register";

describe("Register", () => {
  beforeEach(() => {
    render(<Register />);
  });

  test("It renders a form", () => {
    let from = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
});
