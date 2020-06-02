import React, { Component } from "react";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import {fetchStories} from '../../apiCalls'
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
`

const ArticleWrapper = styled.section`
  background-color: ${background};
  width: 90%;
  height: 25%;
  display: flex;
  flex-direction: column;
  padding: 2%;
  border-top: 1px solid ${secondaryTeal};
  /* border-bottom: 1px solid ${secondaryTeal}; */
  margin: 3% 1%;
`


class AllPreviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      previews: [],
    }
  }

  fetchPreviews = () => {
    const url = window.location.pathname
    return this.props.dataIDs.map(id => {
      const previews = fetchStories(id)
        .then(preview => {
          preview['topic'] = url
          return this.setState({previews: [...this.state.previews, preview]})
      })
      return previews
    })
  }

  componentDidMount = async () => {
    await this.fetchPreviews();
  }

  getPrevPropsIDs = (prevProps) => {
    return prevProps.dataIDs.map(id => {
      return id
    })
  }

  validateArrays = (prevProps) => {
    const prevPropsIDs = this.getPrevPropsIDs(prevProps)
    const test = prevPropsIDs.every(prevProp => {
      return this.props.dataIDs.includes(prevProp)
    })
    return test
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if(!this.validateArrays(prevProps)) {
      this.setState({previews: []})
      this.fetchPreviews();
    }
  }

  createArticlePreviews = () => {
    let articlePreviews = this.state.previews.map(preview => {
      return (
        <ArticleWrapper>
          <ArticlePreview setClickedArticle={this.props.setClickedArticle} key={preview.id} {...preview} />
        </ArticleWrapper>
      )
    })
    return articlePreviews
  }

  render() {
    return (
      <Wrapper>
        {this.createArticlePreviews()}
      </Wrapper>
    )
  }
};

export default AllPreviewsContainer;
