import React from "react";
import ReactDOM from "react-dom";
import AllPreviewContainer from "./AllPreviewContainer";
import { render, fireEvent } from "@testing-library/react";
import { fetchStories, fetchImage } from "../../apiCalls";
import { MemoryRouter, Link } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

// jest.mock('../../apiCalls')

describe("All Preview Container", () => {
  const dataIDs = [23381156];

  const previewData = {
    id: 23381156,
    title: "Debian Handbook for Debian 10 Buster",
    topic: "/articles/Top",
    url: "https://debian-handbook.info/browse/stable/",
  };
  const imageData = {
    hybridGraph: {
      image:
        "https://debian-handbook.info/browse/stable/Common_Content/images/image_left.png",
      description: "Random",
    },
  };
  // it.only('should render without crashing', () => {
  //   fetchStories.mockResolvedValueOnce(previewData)
  //   fetchImage.mockResolvedValueOnce(imageData)
  //   const { getByText } = render(<MemoryRouter><AllPreviewContainer dataIDs={dataIDs}/> </MemoryRouter>)
  //   const title = getByText("Debian Handbook for Debian 10 Buster")
  //   expect(title).toBeInTheDocument()
  // })
});
