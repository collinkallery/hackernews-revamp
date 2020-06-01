import React, { useState } from "react";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import styled from "styled-components";
import { darkTheme } from "../../theme/globalStyle";

const {
  primaryPurple,
  primaryBlue,
  secondaryTeal,
  background,
  textColor,
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

  h3 {
    font-size: 1em;
    color: white;
    margin: 3% 0 0 0;
    padding: 0;
    border-bottom: 2px solid ${secondaryTeal};
  }
`;

const HomeArticleContainer = (props) => {
  const [rerender, setRerender] = useState("");
  const articlesToDisplay = props.homePageStories.map((story) => {
    if (!story) {
      setRerender(story);
    }
    return (
      <ArticleWrapper key={story.id}>
        <h3>{story.topic} Story</h3>
        <ArticlePreview {...story} key={story.id} />
      </ArticleWrapper>
    );
  });
  return <Wrapper>{articlesToDisplay}</Wrapper>;
};

export default HomeArticleContainer;
