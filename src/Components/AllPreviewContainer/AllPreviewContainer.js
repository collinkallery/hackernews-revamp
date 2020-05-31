import React, { useState, useEffect, Component } from "react";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import {fetchStories} from '../../apiCalls'

class AllPreviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      previews: [],
      // articlePreviews: []
    }
  }

  fetchPreviews = () => {
    return this.props.dataIDs.map(id => {
      fetchStories(id)
        .then(preview => {
          this.setState({previews: [...this.state.previews, preview]})
      })
    })
  }

  componentDidMount = async () => {
    await this.fetchPreviews();
  }

  createArticlePreviews = () => {
    let articlePreviews = this.state.previews.map(preview => {
      return (
        <ArticlePreview {...preview} />
      )
    })
    return articlePreviews
  }

  render() {
    return <div>{this.createArticlePreviews()}</div>;
  }
};

export default AllPreviewsContainer;
