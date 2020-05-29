import React, { Component } from "react";
import { fetchPromises, fetchStories } from "../../apiCalls";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import NavBar from "../NavBar/NavBar";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, lightTheme } from "../../theme/globalStyle";
import {Route, Redirect} from "react-router-dom";

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
      rendered: true
    };
  }

  componentDidMount = () => {
    fetchPromises("newstories")
      .then((data) => this.setState({ newStoryIDs: data }))
      .then((newData) => this.getStories(this.state.newStoryIDs[0]))
      .catch((err) => console.error(err));

    fetchPromises("beststories")
      .then((data) => this.setState({ bestStoryIDs: data }))
      .then((newData) => this.getStories(this.state.bestStoryIDs[0]))
      .catch((err) => console.error(err));

    fetchPromises("topstories")
      .then((data) => this.setState({ topStoryIDs: data }))
      .then((newData) => this.getStories(this.state.topStoryIDs[0]))
      .catch((err) => console.error(err));
  };

  getStories = async (id) => {
    const story = await fetchStories(id);
    this.setState({ homePageStories: [...this.state.homePageStories, story] });
  };

  findCategory = (category) => {
    const keys = Object.keys(this.state);
    const correctCategory = keys.find(key => key.includes(category));
    return correctCategory
  }

  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <Wrapper>
          <NavBar />
          <ArticleContainer homePageStories={this.state.homePageStories} />
          <GlobalStyle />
          <Route
          exact path="/articles/:category"
          render={({match}) => {
            const { category } = match.params;
            const stateKey = this.findCategory(category);
            const dataIDs = this.state[stateKey];
            }
          }
        />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
