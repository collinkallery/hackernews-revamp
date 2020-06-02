import React from "react";
import styled from "styled-components";
import {darkTheme} from "../../theme/globalStyle";

const {
  primaryPurple,
  primaryBlue,
  secondaryTeal,
  background,
  textColor,
  error
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
  padding: 3%;

  img {
    width: 100%;
  }

  h2 {
    font-size: 1.6em;
    padding: 3%;
  }

  p {
    padding: 3%;
  }

  button {
    width: 40%;
    background-color: ${secondaryTeal};
    margin: 5%;
    border: none;
    padding: 3%;
    font-size: .8em;
    border-radius: 5px;
  }

  button:hover {
    background-color: ${primaryBlue};
    color: #FFFFFF;
  }
`
const ImgContainer = styled.section`
  width: 90%;
  align-self: center;
`

const BtnContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;

`

const ArticleExpanded = (props) => {

  return (
  <Wrapper>
    <h2>{props.clickedArticle.title}</h2>
    <ImgContainer>
      <img src={props.clickedArticle.image}/>
    </ImgContainer>
    <p>{props.clickedArticle.description}</p>
    <BtnContainer>
      <button>View Whole Article</button>
      <button onClick={() => props.updatedSavedArticles(props.clickedArticle)}>Save this Article</button>
    </BtnContainer>
  </Wrapper>
  )
};

export default ArticleExpanded;
