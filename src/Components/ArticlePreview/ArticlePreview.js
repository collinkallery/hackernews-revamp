import React, { useState } from "react";
import ArticleExpanded from "../ArticleExpanded/ArticleExpanded";
import styled from "styled-components";
import { fetchImage } from "../../apiCalls";
import { darkTheme } from "../../theme/globalStyle";
import { Link } from "react-router-dom";

const {
  primaryPurple,
  primaryBlue,
  secondaryTeal,
  background,
  textColor,
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
    color: white;
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
  const [description, setDescription] = useState(null);
  const pathName = `/articles/${props.topic}/${props.id}`;

  fetchImage(props.url).then((data) => {
    let imageUrl = "";
    if (!data.hybridGraph) {
      imageUrl =
        "https://cdn.windowsreport.com/wp-content/uploads/2018/07/Error-message-1.jpg";
    } else {
      imageUrl = data.hybridGraph.image;
    }
    return setImage(imageUrl), setDescription(data.hybridGraph.description);
  });

  return (
    <Wrapper>
      <LinkStyled to={pathName}>
        <p>{props.title}</p>
      </LinkStyled>
      <ImgContainer>
        <img src={image} alt={description} />
      </ImgContainer>
    </Wrapper>
  );
};

export default ArticlePreview;
