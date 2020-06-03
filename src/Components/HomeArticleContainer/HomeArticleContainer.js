import React from "react";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import styled from "styled-components";
import { darkTheme } from "../../theme/globalStyle";
import PropTypes from "prop-types";

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

  p.topic-header {
    font-size: 1em;
    color: white;
    margin: 3% 0 0 0;
    padding: 0;
    border-bottom: 2px solid ${secondaryTeal};
  }
`;

const HomeArticleContainer = (props) => {
  const articlesToDisplay = props.homePageStories.map((story) => {
    return (
      <ArticleWrapper>
        <p className="topic-header">{story.topic} Story</p>
        <ArticlePreview
          setClickedArticle={props.setClickedArticle}
          {...story}
          key={story.id}
        />
      </ArticleWrapper>
    );
  });
  return <Wrapper>{articlesToDisplay}</Wrapper>;
};

HomeArticleContainer.propTypes = {
  homePageStories: PropTypes.array,
  setClickedArticle: PropTypes.func,
};

export default HomeArticleContainer;
