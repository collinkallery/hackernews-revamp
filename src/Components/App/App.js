import React, { Component } from "react";
import { fetchPromises, fetchStories } from "../../apiCalls";
import HomeArticleContainer from "../HomeArticleContainer/HomeArticleContainer";
import ArticleExpanded from "../ArticleExpanded/ArticleExpanded";
import NavBar from "../NavBar/NavBar";
import SavedContainer from "../SavedContainer/SavedContainer";
import AllPreviewContainer from "../AllPreviewContainer/AllPreviewContainer";
import Login from "../Login/Login";
import AboutPage from "../AboutPage/AboutPage";
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
      user: {},
      savedArticles: [],
    };
  }

  componentDidMount = async () => {
    await fetchPromises("newstories").then((data) => {
      return this.finishFetch("NewestStoryIDs", data, "Newest")
    })
    await fetchPromises("beststories").then((data) => {
      return this.finishFetch("BestStoryIDs", data, "Best")
    });
    await fetchPromises("topstories").then((data) => {
      return this.finishFetch("TopStoryIDs", data, "Top")
    });
  };

  finishFetch = async (stateKey, fetchedData, topic) => {
    this.setState({ [stateKey]: fetchedData });
    const story = await this.getStories(this.state[stateKey][0]);
    console.log(this.state.homePageStories)
    this.addTopic(story, topic);
    return story 
  };

  getStories = async (id) => {
    const story = await fetchStories(id);
    this.setState({ homePageStories: [...this.state.homePageStories, story] });
    return story;
  };

  addTopic = (story, topic) => {
    const matchingStory = this.state.homePageStories.find(specificStory => {
        return specificStory.id === story.id
      }
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
    this.setState({ clickedArticle: article });
  };

  setUser = (user) => {
    this.setState({ user: user });
  };

  resetUser = () => {
    this.setState({ user: {} });
  };

  updateSavedArticles = (newSaved) => {
    const allIDs = this.state.savedArticles.reduce((acc, article) => {
      acc.push(article.id);
      return acc;
    }, []);
    if (!allIDs.includes(newSaved.id)) {
      this.saveArticle(newSaved);
    } else {
      this.removeFromSaved(newSaved);
    }
  };

  saveArticle = (article) => {
    this.setState({
      savedArticles: [...this.state.savedArticles, article],
    });
  };

  removeFromSaved = (articleToRemove) => {
    const newSavedArticles = this.state.savedArticles.filter((article) => {
      return article.id !== articleToRemove.id;
    });
    console.log("saved", newSavedArticles);
    this.setState({
      savedArticles: newSavedArticles,
    });
  };

  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <Wrapper>
          <NavBar />
          <Route
            exact
            path="/about"
            render={() => {
              return <AboutPage />;
            }}
          />
          <Route
            exact
            path="/"
            render={() => {
              return (
                <HomeArticleContainer
                  homePageStories={this.state.homePageStories}
                  setClickedArticle={this.setClickedArticle}
                />
              );
            }}
          />
          <GlobalStyle />
          <Route
            path="/Saved"
            exact
            render={() => {
              return (
                <SavedContainer savedArticles={this.state.savedArticles} />
              );
            }}
          />
          <Route
            path="/articles/:category"
            exact
            render={({ match }) => {
              const { category } = match.params;
              const stateKey = this.findCategory(category);
              const dataIDs = this.state[stateKey].slice(0, 10);
              return (
                <AllPreviewContainer
                  setClickedArticle={this.setClickedArticle}
                  dataIDs={dataIDs}
                />
              );
            }}
          />
          <Route
            path="/articles/:category/:id"
            exact
            render={() => {
              return (
                <ArticleExpanded 
                clickedArticle={this.state.clickedArticle}
                updateSavedArticles={this.updateSavedArticles} />
              );
            }}
          />
          <Route
            path="/login"
            exact
            render={() => {
              return <Login setUser={this.setUser} user={this.state.user} />;
            }}
          />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
