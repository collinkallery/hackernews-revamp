import React, {useState} from 'react';
import ArticleExpanded from '../ArticleExpanded/ArticleExpanded'
import styled from 'styled-components'
import {fetchImage} from '../../apiCalls'
import {darkTheme} from "../../theme/globalStyle";
import {Link} from 'react-router-dom';

const {primaryPurple, primaryBlue, secondaryTeal, background, textColor, error} = darkTheme;

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

  p.article-preview-title {
    font-size: 1.5em;
    background-color: ${background};
    color: white;
    margin-top: 2%;
  }
`

const ImgContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`


const ArticlePreview = (props) => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(null);
  const pathName = `/articles/${props.topic}/${props.id}`
  fetchImage(props.url)
    .then(data => {
      return (
        // use a try catch
        setImage(data.hybridGraph.image),
        setDescription(data.hybridGraph.description)
      )
    })

  return (
      <Wrapper>
        <Link to={pathName}>
          <p className="article-preview-title">{props.title}</p>
        </Link>
        <ImgContainer>
          <img src={image} />
        </ImgContainer>
      </Wrapper>
  )
}

export default ArticlePreview;
