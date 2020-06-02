import React, { Component } from "react";
import { fetchPromises, fetchStories } from "../../apiCalls";
import HomeArticleContainer from "../HomeArticleContainer/HomeArticleContainer";
import ArticleExpanded from "../ArticleExpanded/ArticleExpanded";
import NavBar from "../NavBar/NavBar";
import SavedContainer from '../SavedContainer/SavedContainer';
import AllPreviewContainer from "../AllPreviewContainer/AllPreviewContainer";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, lightTheme } from "../../theme/globalStyle";
import { Route } from "react-router-dom";

const {
  primaryPurple,
  primaryBlue,
  secondaryTeal,
  background,
  surface,
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
      clickedArticle: {},
      savedArticles: []
    };
  }

  componentDidMount = async () => {
    await fetchPromises("newstories").then((data) =>
      this.finishFetch("NewestStoryIDs", data, "Newest")
    );
    await fetchPromises("beststories").then((data) =>
      this.finishFetch("BestStoryIDs", data, "Best")
    );
    await fetchPromises("topstories").then((data) =>
      this.finishFetch("TopStoryIDs", data, "Top")
    );
  };

  finishFetch = async (stateKey, fetchedData, topic) => {
    this.setState({ [stateKey]: fetchedData });
    const story = await this.getStories(this.state[stateKey][0]);
    this.addTopic(story, topic);
  };

  getStories = async (id) => {
    const story = await fetchStories(id);
    this.setState({ homePageStories: [...this.state.homePageStories, story] });
    return story;
  };

  addTopic = (story, topic) => {
    const matchingStory = this.state.homePageStories.find(
      (specificStory) => specificStory.id === story.id
    );
    matchingStory["topic"] = topic;
    const index = this.state.homePageStories.indexOf(matchingStory);
    this.state.homePageStories.splice(index, 1);
    this.setState({
      homePageStories: [...this.state.homePageStories, matchingStory],
    });
  };

  findCategory = (category) => {
    const keys = Object.keys(this.state);
    const correctCategory = keys.find((key) => key.includes(category));
    return correctCategory;
  };

  setClickedArticle = (article) => {
    this.setState({clickedArticle: article})
  }

  updatedSavedArticles = (newSaved) => {
    const allIDs = this.state.savedArticles.reduce((acc, article) => {
      acc.push(article.id)
      return acc;
    }, []);
    if (!allIDs.includes(newSaved.id)) {
      this.saveArticle(newSaved);
    } else {
      this.removeFromSaved(newSaved);
    }
  }

  saveArticle = (article) => {
    this.setState({
      savedArticles: [...this.state.savedArticles, article]
    })
  }

  removeFromSaved = (articleToRemove) => {
    const newSavedArticles = this.state.savedArticles.filter(article => {
      return article.id !== articleToRemove.id
    })
    console.log('saved', newSavedArticles);
    this.setState({
      savedArticles: newSavedArticles
    })
  }


  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <Wrapper>
          <NavBar />
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <HomeArticleContainer
                    homePageStories={this.state.homePageStories}
                  />
                );
              }}
            />
            <GlobalStyle />
            <Route
              path="/Saved"
              exact
              render={() => {
                return <SavedContainer savedArticles={this.state.savedArticles} />
              }}
            />
            <Route
              path="/articles/:category"
              exact
              render={({ match }) => {
                const { category } = match.params;
                const stateKey = this.findCategory(category);
                const dataIDs = this.state[stateKey].slice(0, 9);
                return <AllPreviewContainer setClickedArticle={this.setClickedArticle} dataIDs={dataIDs} />;
              }}
            />
          <Route
            path="/articles/:category/:id"
            exact
            render={() => {
              return <ArticleExpanded updatedSavedArticles={this.updatedSavedArticles} clickedArticle={this.state.clickedArticle}/>
            }}
          />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
