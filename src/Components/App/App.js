import React, { Component } from "react";
import { fetchPromises, fetchStories } from "../../apiCalls";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import NavBar from "../NavBar/NavBar";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, lightTheme } from "../../theme/globalStyle";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      newStoryIDs: [],
      bestStoryIDs: [],
      topStoryIDs: [],
      homePageStories: [],
      test: ''
    };
  }

  componentDidMount = async () => {
    await fetchPromises("newstories")
      .then((data) => this.setState({ newStoryIDs: data }))
      .then((newData) => this.getStories(this.state.newStoryIDs[0]))
      .then(data => this.addTopic(data, 'Newest'))
      .catch((err) => console.error(err));

    await fetchPromises("beststories")
      .then((data) => this.setState({ bestStoryIDs: data }))
      .then((newData) => this.getStories(this.state.bestStoryIDs[0]))
      .then(data => this.addTopic(data, 'Best'))
      .catch((err) => console.error(err));

    await fetchPromises("topstories")
      .then((data) => this.setState({ topStoryIDs: data }))
      .then((newData) => this.getStories(this.state.topStoryIDs[0]))
      .then(data => this.addTopic(data, 'Top'))
      .catch((err) => console.error(err));
  };

  getStories = async (id) => {
    const story = await fetchStories(id);
    this.setState({ homePageStories: [...this.state.homePageStories, story] });
    return story;
  };

  addTopic = (story, topic) => {
    const matchingStory = this.state.homePageStories.find(specificStory => specificStory.id == story.id)
    matchingStory['topic'] = topic;
    const index = this.state.homePageStories.indexOf(matchingStory);
    this.state.homePageStories.splice(index, 1);
    this.setState({
      homePageStories: [...this.state.homePageStories, matchingStory]
    })
  };

  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <Wrapper>
          <NavBar />
          <ArticleContainer homePageStories={this.state.homePageStories} />
          <GlobalStyle />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
