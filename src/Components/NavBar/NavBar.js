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
  border: 1px solid white;
`;

const HeaderStyled = styled.h3`
  text-decoration: underline;
`;

const NavBarTopStyled = styled.div`
  width: 100%;
  height: 70%;
  border: 1px solid black;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "News Cycle", sans-serif;
  color: white;
`;
const DropDownStyled = styled.select`
  background-color: black;
  width: 15%;
  height: 40%;
  border-radius: 5px;
  color: white;
  margin: 3%;
  font-size: 1em;
  border: 1px solid white;
`;
const SignInBtnStyled = styled.button`
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  margin: 3%;
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

const NavBar = () => {
  return (
    <NavBarStyled>
      <NavBarTopStyled>
        <LogoStyled>H N</LogoStyled>
        <HeaderStyled>Headlines</HeaderStyled>
        <SignInBtnStyled>SIGN IN</SignInBtnStyled>
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
