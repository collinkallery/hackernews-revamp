import React, {useState} from 'react';
import ArticleExpanded from '../ArticleExpanded/ArticleExpanded'
import styled from 'styled-components'
import {fetchImage} from '../../apiCalls'

const StoryCard = styled.div`
  background-color: purple;
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
      <StoryCard>
        <p>{props.title}</p>
        <img src={image} />
        <p id={props.id}>{description}</p>
      </StoryCard>
  )
}

export default ArticlePreview;
