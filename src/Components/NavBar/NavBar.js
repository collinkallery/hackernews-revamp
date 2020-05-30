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
  ${"" /* border: 1px solid black; */}
  background-color: #090909;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "News Cycle", sans-serif;
  color: #ffffff;

  h1 {
    margin: 3%;
    padding: 1.5%;
    border: 1px solid white;
  }

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
  border: 1px solid black;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: "News Cycle", sans-serif;
  color: white;
`;

const LinkStyled = styled(Link)`
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

const NavBar = () => {
  return (
    <NavBarStyled>
      <NavBarTopStyled>
        <h1>H N</h1>
        <h2>Headlines</h2>
        <button>LOGIN</button>
      </NavBarTopStyled>
      <NavBarBottomStyled>
        <LinkStyled to="/articles/new">New</LinkStyled>
        <LinkStyled to="/articles/top">Top</LinkStyled>
        <LinkStyled to="/articles/best">Best</LinkStyled>
        <LinkStyled to="/articles/past">Past</LinkStyled>
        <LinkStyled to="/articles/jobs">Jobs</LinkStyled>
      </NavBarBottomStyled>
    </NavBarStyled>
  );
};

export default NavBar;
