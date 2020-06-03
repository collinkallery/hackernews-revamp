import React from "react";
import ReactDOM from "react-dom";
import AboutPage from "./AboutPage";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

describe("AboutPage", () => {
  it("should render AboutPage", () => {
    const { getByText } = render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );
    expect(getByText("Welcome to Hacker News Mobile")).toBeInTheDocument();
  });
});
