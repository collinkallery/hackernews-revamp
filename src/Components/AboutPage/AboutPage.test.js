import React from "react";
import AboutPage from "./AboutPage";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

describe("About Page", () => {
  it("should render About Page", () => {
    const { getByText } = render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>
    );
    expect(getByText("Welcome to Hacker News Mobile")).toBeInTheDocument();
  });
});
