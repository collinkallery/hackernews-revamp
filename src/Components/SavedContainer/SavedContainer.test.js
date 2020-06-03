import React from "react";
import ReactDOM from "react-dom";
import SavedContainer from "./SavedContainer";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

describe("SavedContainer", () => {
  it("should render SavedContainer", () => {
    const { getByText } = render(
      <MemoryRouter>
        <SavedContainer savedArticles={[]} />
      </MemoryRouter>
    );
    expect(
      getByText("You have not saved any articles yet!")
    ).toBeInTheDocument();
  });
});
