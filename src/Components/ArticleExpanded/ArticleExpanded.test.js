import React from "react";
import ArticleExpanded from "./ArticleExpanded";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

describe("ArticleExpanded", () => {
  let story1 = {
    by: "colinprince",
    descendants: 0,
    id: 23404593,
    image:
      "https://d2r55xnwy6nx47.cloudfront.net/uploads/2020/06/Dimitrov_Blog_1200_Social.jpg",
    description:
      "Mathematicians try to figure out when problems can be solved using current knowledge — and when they have to chart a new path instead.",
    score: 1,
    time: 1591198783,
    title: "Amazon's unrivalled power threatens jobs, communities",
    type: "story",
    url:
      "https://www.cbc.ca/radio/thesundayedition/the-sunday-edition-for-may-31-2020-1.5580246/amazon-s-unrivalled-power-threatens-jobs-communities-and-democracy-monopoly-critic-stacy-mitchell-1.5585645",
  };

  it("should render ArticleExpanded", () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <ArticleExpanded clickedArticle={story1} />
      </MemoryRouter>
    );

    expect(getByAltText(story1.description)).toBeInTheDocument();
  });

  it("should render buttons", () => {
    const mockUpdateSaved = jest.fn();
    const { getByText } = render(
      <MemoryRouter>
        <ArticleExpanded
          clickedArticle={story1}
          updateSavedArticles={mockUpdateSaved}
        />
      </MemoryRouter>
    );
    const readArticleBtn = getByText("Read Article");
    const saveArticleBtn = getByText("Save this Article");
    expect(readArticleBtn).toBeInTheDocument();
    fireEvent.click(saveArticleBtn);
    expect(mockUpdateSaved).toHaveBeenCalled();
  });
});
