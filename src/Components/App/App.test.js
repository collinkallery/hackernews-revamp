import React from "react";
import ReactDOM  from "react-dom";
import App from "./App";
import HomeArticleContainer from "../HomeArticleContainer/HomeArticleContainer";
import ArticleExpanded from "../ArticleExpanded/ArticleExpanded";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import {} from "../../apiCalls";
import { MemoryRouter } from 'react-router-dom'

describe("App", () => {
  it("render without crashing", () => {
    const { getByText } = render(<MemoryRouter><App/></MemoryRouter>)

    const navHeader = getByText('Headlines')

    expect(navHeader).toBeInTheDocument()
    
  });

  it('should be able to click on sign in btn', () => {
    const { getByText } = render(<MemoryRouter><App/></MemoryRouter>);

    const signInBtn = getByText('SIGN IN')

    fireEvent.click(signInBtn)


  })
});
