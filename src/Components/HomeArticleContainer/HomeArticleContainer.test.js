import React from "react";
import ReactDOM from "react-dom";
import HomeArticleContainer from "./HomeArticleContainer";
import { render, fireEvent } from "@testing-library/react";
import { fetchStories, fetchImage } from "../../apiCalls";
import { MemoryRouter, Link } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

describe("Home Article Container", () => {
  const homePageStories = [
    {
      id: 23381156,
      title: "Debian Handbook for Debian 10 Buster",
      topic: "Top",
      url: "https://debian-handbook.info/browse/stable/",
    },
  ];

  it("should render without crashing", () => {
    const { getByText } = render(
      <MemoryRouter>
        {" "}
        <HomeArticleContainer homePageStories={homePageStories} />{" "}
      </MemoryRouter>
    );

    const previewTitle = getByText("Top Story");
    expect(previewTitle).toBeInTheDocument();
  });
});
