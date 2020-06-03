import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import HomeArticleContainer from "../HomeArticleContainer/HomeArticleContainer";
import ArticleExpanded from "../ArticleExpanded/ArticleExpanded";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { fetchPromises, fetchStories, fetchImage } from "../../apiCalls";
import { MemoryRouter } from "react-router-dom";
import "mutationobserver-shim";

global.MutationObserver = window.MutationObserver;

jest.mock("../../apiCalls");

describe("App", () => {
  let dataID1 = [23404593];

  let dataID2 = [23393914];

  let dataID3 = [23403800];

  let story1 = {
    by: "colinprince",
    descendants: 0,
    id: 23404593,
    score: 1,
    time: 1591198783,
    title: "Amazon's unrivalled power threatens jobs, communities",
    type: "story",
    url:
      "https://www.cbc.ca/radio/thesundayedition/the-sunday-edition-for-may-31-2020-1.5580246/amazon-s-unrivalled-power-threatens-jobs-communities-and-democracy-monopoly-critic-stacy-mitchell-1.5585645",
  };

  let story2 = {
    by: "laurex",
    descendants: 0,
    id: 23393914,
    score: 1,
    time: 1591120626,
    title: "Police attacks against journalists across the U.S. since May 28",
    type: "story",
    url:
      "https://www.niemanlab.org/2020/06/well-try-to-help-you-follow-the-police-attacks-on-journalists-across-the-country",
  };

  let story3 = {
    by: "theanirudh",
    descendants: 0,
    id: 23403800,
    score: 1,
    time: 1591120626,
    title: "Software Engineering Within SpaceX",
    type: "story",
    url: "https://yasoob.me/posts/software_engineering_within_spacex_launch/",
  };

  let imageData1 = {
    hybridGraph: {
      title: "Amazon's unrivalled power threatens jobs, communities",
      description: "Fake description 1",
      image: "fakeimage1.com",
      url:
        "https://www.cbc.ca/radio/thesundayedition/the-sunday-edition-for-may-31-2020-1.5580246/amazon-s-unrivalled-power-threatens-jobs-communities-and-democracy-monopoly-critic-stacy-mitchell-1.5585645",
    },
  };

  let imageData2 = {
    hybridGraph: {
      title: "Police attacks against journalists across the U.S. since May 28",
      description: "Fake description 2",
      image: "fakeimage2.com",
      url:
        "https://www.niemanlab.org/2020/06/well-try-to-help-you-follow-the-police-attacks-on-journalists-across-the-country",
    },
  };

  let imageData3 = {
    hybridGraph: {
      title: "Amazon's unrivalled power threatens jobs, communities",
      description: "Fake description 3",
      image: "fakeimage3.com",
      url: "https://yasoob.me/posts/software_engineering_within_spacex_launch/",
    },
  };

  it("render without crashing", () => {
    fetchPromises.mockResolvedValueOnce(dataID1);
    fetchStories.mockResolvedValueOnce(story1);

    fetchPromises.mockResolvedValueOnce(dataID2);
    fetchStories.mockResolvedValueOnce(story2);

    fetchPromises.mockResolvedValueOnce(dataID3);
    fetchStories.mockResolvedValueOnce(story3);

    fetchImage.mockResolvedValueOnce(imageData1);
    fetchImage.mockResolvedValueOnce(imageData2);
    fetchImage.mockResolvedValueOnce(imageData3);

    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const navHeader = getByText("Headlines");

    expect(navHeader).toBeInTheDocument();
  });

  it("should be able to click on sign in btn", () => {
    fetchPromises.mockResolvedValueOnce(dataID1);
    fetchStories.mockResolvedValueOnce(story1);

    fetchPromises.mockResolvedValueOnce(dataID2);
    fetchStories.mockResolvedValueOnce(story2);

    fetchPromises.mockResolvedValueOnce(dataID3);
    fetchStories.mockResolvedValueOnce(story3);

    fetchImage.mockResolvedValueOnce(imageData1);
    fetchImage.mockResolvedValueOnce(imageData2);
    fetchImage.mockResolvedValueOnce(imageData3);

    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const signInBtn = getByText("Login");

    fireEvent.click(signInBtn);

    const partialHeader = getByText("Enter your username:");

    expect(partialHeader).toBeInTheDocument();
  });

  it("homepage loads stories", async () => {
    fetchPromises.mockResolvedValueOnce(dataID1);
    fetchStories.mockResolvedValueOnce(story1);

    fetchPromises.mockResolvedValueOnce(dataID2);
    fetchStories.mockResolvedValueOnce(story2);

    fetchPromises.mockResolvedValueOnce(dataID3);
    fetchStories.mockResolvedValueOnce(story3);

    fetchImage.mockResolvedValueOnce(imageData1);
    fetchImage.mockResolvedValueOnce(imageData2);
    fetchImage.mockResolvedValueOnce(imageData3);

    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const headline = await waitForElement(() => {
      return getByText("Amazon's unrivalled power threatens jobs, communities");
    });

    expect(headline).toBeInTheDocument();
  });
});
