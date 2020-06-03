import React from "react";
import ReactDOM  from "react-dom";
import ArticlePreview from "./ArticlePreview";
import { render, fireEvent, getByTestId, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { fetchImage } from "../../apiCalls";
import { MemoryRouter } from 'react-router-dom'

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
    const { getByText } = render(<MemoryRouter><ArticlePreview set{...previewData}/></MemoryRouter>)

    const title = getByText(previewData.title);

    expect(title).toBeInTheDocument();
  });


  it("should render without crashing", async () => {
    const mockHandleClickedArticle = jest.fn();
    const mockSetClickedArticle = jest.fn();
    const { getByTestId } = render(<MemoryRouter><ArticlePreview setClickedArticle={mockSetClickedArticle} {...previewData}/></MemoryRouter>)

    const link = await getByTestId(previewData.id);
    
    fireEvent.click(link);

    expect(mockHandleClickedArticle).toHaveBeenCalled();
  });
});
