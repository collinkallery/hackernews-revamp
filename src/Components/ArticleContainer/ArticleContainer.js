import React from "react";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import styled from "styled-components";

const ArticleContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  border: 2px solid black;
`

const ArticleContainer = (props) => {

  const articlesToDisplay = props.homePageStories.map(story => {
    console.log('topic', story);
    return (
      <section>
        <p>{story.topic} Story</p>
        <ArticlePreview {...story} key={story.id}/>
      </section>
    )
  })
  return (
    <ArticleContainerStyled>
      {articlesToDisplay}
    </ArticleContainerStyled>
  )
}

export default ArticleContainer;
