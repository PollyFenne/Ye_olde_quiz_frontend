import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Login from "../Login";

describe("Login", () => {
  beforeEach(() => {
    render(<Login />);
  });

  test("It renders a form", () => {
    let from = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
});
