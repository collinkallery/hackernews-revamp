import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { darkTheme } from "../../theme/globalStyle";
import PropTypes from "prop-types";

const { secondaryTeal, background, surface } = darkTheme;

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
  color: ${surface};

  button {
    background-color: ${secondaryTeal};
    margin-right: 0.2em;
    border: none;
    padding: 4%;
    font-size: 0.8em;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 1px 1px 1px ${surface};
    border-radius: 2px;
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
  border-bottom: 1px solid ${secondaryTeal};
  &:focus {
    border-left: 1px solid ${surface};
    border-right: 1px solid ${surface};
    border-bottom: none;
    color: white;
  }
`;

const HomeLinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 32px;
  padding: 1.2%;
  border: 1px solid ${surface};
  letter-spacing: 0.2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBar = (props) => {
  return (
    <NavBarStyled>
      <NavBarTopStyled>
        <HomeLinkStyled to="/">HN</HomeLinkStyled>
        <h2>Headlines</h2>
        {props.user && (
          <p>
            {props.user.username} <br /> {props.user.purpose}
          </p>
        )}
        <Link to="/login">
          <button onClick={() => props.resetUser()}>
            {props.user ? "Logout" : "Login"}
          </button>
        </Link>
      </NavBarTopStyled>
      <NavBarBottomStyled>
        <TopicLinkStyled to="/About">About</TopicLinkStyled>
        <TopicLinkStyled to="/articles/Newest">New</TopicLinkStyled>
        <TopicLinkStyled to="/articles/Best">Best</TopicLinkStyled>
        <TopicLinkStyled to="/articles/Top">Top</TopicLinkStyled>
        <TopicLinkStyled to="/Saved">Saved</TopicLinkStyled>
      </NavBarBottomStyled>
    </NavBarStyled>
  );
};

NavBar.propTypes = {
  user: PropTypes.object,
};

export default NavBar;
