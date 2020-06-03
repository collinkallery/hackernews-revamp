import React from "react";
import styled from "styled-components";
import { darkTheme } from "../../theme/globalStyle";
import ArticlePreview from "../ArticlePreview/ArticlePreview";

const {
  primaryPurple,
  primaryBlue,
  secondaryTeal,
  background,
  surface,
  error,
} = darkTheme;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background-color: ${background};
`;

const ArticleWrapper = styled.section`
  background-color: ${background};
  width: 90%;
  height: 25%;
  display: flex;
  flex-direction: column;
  padding: 2%;
  border-top: 1px solid ${secondaryTeal};
  margin: 3% 1%;
`;

const SavedContainer = (props) => {
  const innerText = () => {
    if (props.savedArticles.length > 0) {
      let articles = props.savedArticles.map((article) => {
        return (
          <ArticleWrapper>
            <ArticlePreview {...article} key={article.id} />
          </ArticleWrapper>
        );
      });
      return articles;
    } else {
      return <h2>You have not saved any articles yet!</h2>;
    }
  };
  return <Wrapper>{innerText()}</Wrapper>;
};

export default SavedContainer;
