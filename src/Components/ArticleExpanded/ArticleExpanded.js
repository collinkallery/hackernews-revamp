import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { darkTheme } from "../../theme/globalStyle";
import PropTypes from 'prop-types';

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
    font-size: 0.7em;
    border-radius: 3px;
    font-weight: bold;
    box-shadow: 1px 1px 1px ${surface};
  }

  button:hover {
    background-color: ${primaryBlue};
    color: #ffffff;
  }
`;
const ImgContainer = styled.section`
  width: 90%;
  align-self: center;
`;

const BtnContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ArticleExpanded = (props) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleClick = () => {
    setIsSaved(!isSaved);
    props.updateSavedArticles(props.clickedArticle);
  };

  return (
    <Wrapper>
      <h2>{props.clickedArticle.title}</h2>
      <ImgContainer>
        <img src={props.clickedArticle.image} />
      </ImgContainer>
      <p>{props.clickedArticle.description}</p>
      <BtnContainer>
        <button>Read Article</button>
        <button onClick={handleClick}>
          {isSaved ? "Remove from Saved" : "Save this Article"}
        </button>
      </BtnContainer>
    </Wrapper>
  );
};

export default ArticleExpanded;
