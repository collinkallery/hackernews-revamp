import React, {Component} from 'react';
import './App.css';
import {fetchPromises, fetchStories} from '../../apiCalls'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import NavBar from '../NavBar/NavBar'
import styled from 'styled-components'

const AppStyled = styled.div`
  width: 100%;
  height: 100%;
`

class App extends Component {
  constructor() {
    super()
    this.state ={
      newStoryIDs: [],
      bestStoryIDs: [],
      topStoryIDs: [],
      homePageStories: []
    }
  }

  componentDidMount = () => { 
    fetchPromises('newstories')
      .then(data => this.setState({newStoryIDs: data}))
      .then(newData => this.getStories(this.state.newStoryIDs[0]))
      .catch(err => console.error(err))

    fetchPromises('beststories')
      .then(data => this.setState({bestStoryIDs: data}))
      .then(newData => this.getStories(this.state.bestStoryIDs[0]))
      .catch(err => console.error(err))

    fetchPromises('topstories')
      .then(data => this.setState({topStoryIDs: data}))
      .then(newData => this.getStories(this.state.topStoryIDs[0]))
      .catch(err => console.error(err))
  }

  getStories = async (id) => {
    const story = await fetchStories(id)
    this.setState({homePageStories: [...this.state.homePageStories, story]})
  }






  
  render() {
    return (
      <AppStyled>
        <NavBar />
        <ArticleContainer homePageStories={this.state.homePageStories}/>
      </AppStyled>
    );
  }
}

export default App;
