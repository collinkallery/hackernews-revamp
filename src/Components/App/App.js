import React, { Component } from "react";
import { fetchPromises, fetchStories } from "../../apiCalls";
import HomeArticleContainer from "../HomeArticleContainer/HomeArticleContainer";
import NavBar from "../NavBar/NavBar";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, lightTheme } from "../../theme/globalStyle";
import "../../index.css";

const {
  primaryPurple,
  primaryBlue,
  secondaryTeal,
  background,
  textColor,
  error,
} = darkTheme;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${background};
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      NewestStoryIDs: [],
      BestStoryIDs: [],
      TopStoryIDs: [],
      homePageStories: [],
      test: "",
    };
  }
  // make a helper function that calls lines 30-34
  // takes in the arguments
  componentDidMount = async () => {
    await fetchPromises("newstories")
      .then((data) => this.setState({ NewestStoryIDs: data }))
      .then((newData) => this.getStories(this.state.NewestStoryIDs[0]))
      .then((data) => this.addTopic(data, "Newest"))
      .catch((err) => console.error(err));

    await fetchPromises("beststories")
      .then((data) => this.setState({ BestStoryIDs: data }))
      .then((newData) => this.getStories(this.state.BestStoryIDs[0]))
      .then((data) => this.addTopic(data, "Best"))
      .catch((err) => console.error(err));

    await fetchPromises("topstories")
      .then((data) => this.setState({ TopStoryIDs: data }))
      .then((newData) => this.getStories(this.state.TopStoryIDs[0]))
      .then((data) => this.addTopic(data, "Top"))
      .catch((err) => console.error(err));
  };

  getStories = async (id) => {
    const story = await fetchStories(id);
    this.setState({ homePageStories: [...this.state.homePageStories, story] });
    return story;
  };

  addTopic = (story, topic) => {
    const matchingStory = this.state.homePageStories.find(
      (specificStory) => specificStory.id == story.id
    );
    matchingStory["topic"] = topic;
    const index = this.state.homePageStories.indexOf(matchingStory);
    this.state.homePageStories.splice(index, 1);
    this.setState({
      homePageStories: [...this.state.homePageStories, matchingStory],
    });
  };

  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <Wrapper>
          <NavBar />
          <HomeArticleContainer homePageStories={this.state.homePageStories} />
          <GlobalStyle />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
