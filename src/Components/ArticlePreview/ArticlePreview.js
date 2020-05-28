import React, {useState} from 'react';
import './ArticlePreview.css';
import ArticleExpanded from '../ArticleExpanded/ArticleExpanded'
import styled from 'styled-components'
import {fetchImages} from '../../apiCalls'

const StoryCard = styled.div`
  background-color: purple;
  width: 75%;
  height: 25%;
`

const ArticlePreview = (props) => {

  const [image, setImage] = useState(null);

  fetchImages(props.url)
    .then(data => {
      return setImage(data.hybridGraph.image)
    })

  return (
      <StoryCard>
        <p>{props.title}</p>
        <img src={image} />
      </StoryCard>
  )
}

export default ArticlePreview;
