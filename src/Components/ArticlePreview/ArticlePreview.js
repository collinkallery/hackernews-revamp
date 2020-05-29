import React, {useState} from 'react';
import ArticleExpanded from '../ArticleExpanded/ArticleExpanded'
import styled from 'styled-components'
import {fetchImage} from '../../apiCalls'
import {darkTheme} from "../../theme/globalStyle";

const {primaryPurple, primaryBlue, secondaryTeal, background, textColor, error} = darkTheme;

const Wrapper = styled.div`
  background-color: ${primaryPurple};
  width: 75%;
  height: 25%;

  img {
    width: 20px;
  }
`

const ArticlePreview = (props) => {

  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(null);

  fetchImage(props.url)
    .then(data => {
      return (
        setImage(data.hybridGraph.image),
        setDescription(data.hybridGraph.description)
      )
    })

  return (
      <Wrapper>
        <p>{props.title}</p>
        <img src={image} />
        <p id={props.id}>{description}</p>
      </Wrapper>
  )
}

export default ArticlePreview;
