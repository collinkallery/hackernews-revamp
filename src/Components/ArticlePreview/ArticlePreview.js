import React, { useState, useEffect } from "react";
import ArticleExpanded from "../ArticleExpanded/ArticleExpanded";
import styled from "styled-components";
import { fetchImage } from "../../apiCalls";
import { darkTheme } from "../../theme/globalStyle";
import { Link } from "react-router-dom";
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
  background-color: ${background};
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;

  img {
    width: 80%;
    align-self: center;
  }

  p {
    font-size: 1.5em;
    background-color: ${background};
    color: ${surface};
    margin-top: 2%;
  }
`;

const ImgContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const ArticlePreview = (props) => {
  const [image, setImage] = useState(null);
  let [description, setDescription] = useState(null);
  const pathName = `/articles/${props.topic}/${props.id}`;

  // refactor if/else into ternary
  fetchImage(props.url).then((data) => {
    let imageUrl = "";
    if (
      data ===
      "https://cdn.windowsreport.com/wp-content/uploads/2018/07/Error-message-1.jpg"
    ) {
      imageUrl = data;
      description = "No image to display";
    } else {
      imageUrl = data.hybridGraph.image;
      description = data.hybridGraph.description;
    }
    return setImage(imageUrl), setDescription(description);
  });

  useEffect(() => {
    return () => {
      console.log("cleaned up");
    };
  }, []);

  const handleClickedArticle = () => {
    const previewData = {
      ...props,
      description,
      image,
    };
    props.setClickedArticle(previewData);
  };

  return (
    <Wrapper>
      <LinkStyled onClick={handleClickedArticle} to={pathName}>
        <p>{props.title}</p>
        <ImgContainer>
          <img src={image} alt={description} />
        </ImgContainer>
      </LinkStyled>
    </Wrapper>
  );
};

export default ArticlePreview;
