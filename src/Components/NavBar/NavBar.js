import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { darkTheme } from "../../theme/globalStyle";

const {
  primaryPurple,
  primaryBlue,
  secondaryTeal,
  background,
  surface,
  error,
} = darkTheme;

const NavBarStyled = styled.header`
  width: 100%;
  height: 15%;
`;

const NavBarTopStyled = styled.div`
  width: 100%;
  height: 70%;
  background-color: ${background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;

  button {
    border: none;
    border-radius: 5px;
    background-color: ${secondaryTeal};
    margin: 3%;
  }
`;

const NavBarBottomStyled = styled.div`
  width: 100%;
  height: 30%;
  background-color: ${background};
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${surface};
`;

const TopicLinkStyled = styled(Link)`
  width: 10%;
  text-align: center;
  text-decoration: none;
  color: white;
  &:focus {
    border-left: 1px solid ${surface};
    border-right: 1px solid ${surface};
    color: white;
  }
`;

const HomeLinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 32px;
  padding: 1.5%;
  border: 1px solid ${surface};
`;

// add functionality to login button -LL

const NavBar = () => {
  return (
    <NavBarStyled>
      <NavBarTopStyled>
        <HomeLinkStyled to="/">H N</HomeLinkStyled>
        <h2>Headlines</h2>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </NavBarTopStyled>
      <NavBarBottomStyled>
        <TopicLinkStyled to="/articles/About">About</TopicLinkStyled>
        <TopicLinkStyled to="/articles/Newest">New</TopicLinkStyled>
        <TopicLinkStyled to="/articles/Top">Top</TopicLinkStyled>
        <TopicLinkStyled to="/articles/Best">Best</TopicLinkStyled>
        <TopicLinkStyled to="/articles/Saved">Saved</TopicLinkStyled>
      </NavBarBottomStyled>
    </NavBarStyled>
  );
};

export default NavBar;
