/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Banner from "../Banner";

import { MemoryRouter, NavLink } from "react-router-dom";

describe("Banner", () => {
  beforeEach(() => {
    render(<Banner />);
  });

  test("it renders a H1 tag", () => {
    render(<Banner />);
    const header = screen.queryByRole("heading");
    expect(header).toBeInTheDocument();
  });

  test("There is one NavLink", () => {
    render(<Banner />);
    const nav = screen.queryAllByRole("link");
    expect(nav).toHaveLength(1);
  });
});
