import React from "react";
import ReactDOM  from "react-dom";
import ArticlePreview from "./ArticlePreview";
import { render, fireEvent } from "@testing-library/react";
import { fetchImage } from "../../apiCalls";
import { MemoryRouter, Link } from 'react-router-dom'
import "@testing-library/jest-dom/extend-expect";

// jest.mock('../../apiCalls')

//put in it block 
// fetchImage.mockResolvedValueOnce(imageData)

describe("Article Preview", () => {

  const previewData = {
    id: 23381156,
    title: "Debian Handbook for Debian 10 Buster",
    topic: "/articles/Top",
    url: "https://debian-handbook.info/browse/stable/",
  }

  const imageData = {
    hybridGraph: {
      image: "https://debian-handbook.info/browse/stable/Common_Content/images/image_left.png",
      description: 'Random'
    }
  }

  it("should render without crashing", () => {
    const { getByText } = render(<MemoryRouter><ArticlePreview {...previewData}/></MemoryRouter>)
    const title = getByText(previewData.title);
    expect(title).toBeInTheDocument();
  });

  // it('image should be in the document', () => {
  //     fetchImage.mockResolvedValueOnce(previewData)
  //     const { getByAltText } = render(<MemoryRouter><ArticlePreview {...previewData}/></MemoryRouter>)

  //     // const setClickedArticleMock = jest.fn()

  //     const image = getByAltText(/Some random description/i);
  //     expect(image).toBeInTheDocument();

  // })
});
