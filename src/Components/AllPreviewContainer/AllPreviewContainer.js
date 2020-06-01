import React, { Component } from "react";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import {fetchStories} from '../../apiCalls'

class AllPreviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      previews: [],
    }
  }

  fetchPreviews = () => {
    return this.props.dataIDs.map(id => {
      return fetchStories(id)
        .then(preview => {
          return this.setState({previews: [...this.state.previews, preview]})
      })
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
        <ArticlePreview key={preview.id} {...preview} />
      )
    })
    return articlePreviews
  }

  render() {
    return <div>{this.createArticlePreviews()}</div>;
  }
};

export default AllPreviewsContainer;
