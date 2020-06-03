import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import ErrorImg from "./HN.png";

  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html,
  #root {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: #121212;
    color: #FFFFFF;
    font-family: 'News Cycle', sans-serif;
  }
`;

export const darkTheme = {
  primaryPurple: "#BB86FC",
  primaryBlue: "#3700B3",
  secondaryTeal: "#03DAC5",
  background: "#121212",
  surface: "#FFFFFF",
  error: "#CF6679",
};

export const lightTheme = {
  primaryPurple: "#BB86FC",
  primaryBlue: "#3700B3",
  secondaryTeal: "#03DAC5",
  background: "#FFFFFF",
  surface: "#121212",
  error: "#CF6679",
};
