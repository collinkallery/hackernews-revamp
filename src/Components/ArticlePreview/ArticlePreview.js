import React from "react";
import ArticleExpanded from "../ArticleExpanded/ArticleExpanded";
import styled from "styled-components";

const StoryCard = styled.div`
  background-color: purple;
  width: 75%;
  height: 25%;
`;

const ArticlePreview = (props) => {
  return (
    <StoryCard>
      <p>{props.title}</p>
    </StoryCard>
  );
};

export default ArticlePreview;
