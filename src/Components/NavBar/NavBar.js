import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarStyled = styled.div`
  width: 100%;
  height: 15%;
`;

const LogoStyled = styled.h1`
  margin: 3%;
  padding: 1.5%;
  border: 1px solid #ffffff;
`;

const NavBarTopStyled = styled.div`
  width: 100%;
  height: 70%;
  background-color: #090909;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "News Cycle", sans-serif;
  color: #ffffff;

  button {
    border: 2px solid #090909;
    border-radius: 5px;
    background-color: #ffffff;
    margin: 3%;
  }
`;

const NavBarBottomStyled = styled.div`
  width: 100%;
  height: 30%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: "News Cycle", sans-serif;
  color: white;
`;

const TopicLinkStyled = styled(Link)`
  width: 10%;
  text-align: center;
  text-decoration: none;
  color: white;
  &:focus {
    border-left: 1px solid white;
    border-right: 1px solid white;
    color: white;
  }
`;

// update NavBar Links to be About New Top Best Saved? It would be cool to get saved articles to persist in local storage based on signed in user
// add functionality to login button -LL

const HomeLinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 32px;
  /* margin: 3%; */
  padding: 1.5%;
  border: 1px solid white;
`

const NavBar = () => {
  return (
    <NavBarStyled>
      <NavBarTopStyled>
        <HomeLinkStyled to='/'>
          H N
        </HomeLinkStyled>
        <h2>Headlines</h2>
        <button>SIGN IN</button>
      </NavBarTopStyled>
      <NavBarBottomStyled>
        <TopicLinkStyled to='/articles/New'>New</TopicLinkStyled>
        <TopicLinkStyled to='/articles/Top'>Top</TopicLinkStyled>
        <TopicLinkStyled to='/articles/Best'>Best</TopicLinkStyled>
        <TopicLinkStyled to='/articles/Past'>Past</TopicLinkStyled>
        <TopicLinkStyled to='/articles/Jobs' >Jobs</TopicLinkStyled>
      </NavBarBottomStyled>
    </NavBarStyled>
  );
};

export default NavBar;
