import React, {Component, useState, useEffect} from 'react';
import './ArticleContainer.css';
import ArticlePreview from '../ArticlePreview/ArticlePreview';
import styled from 'styled-components';

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
    console.log('story', story);
    return (
      <ArticlePreview {...story} key={story.id}/>
    )
  })
  return (
    <ArticleContainerStyled>
      {articlesToDisplay}
    </ArticleContainerStyled>
  )
}

export default ArticleContainer;
