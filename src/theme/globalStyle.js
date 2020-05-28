import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=News+Cycle:wght@400;700&display=swap")

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
    font-family: 'News Cycle', sans-serif;
  }

  #blockColorblindContent {
    display: none;
  }
`;

export const darkTheme = {
  primaryPurple: "#BB86FC",
  primaryBlue: "#3700B3",
  secondaryTeal: "#03DAC5",
  background: "#121212",
  textColor: "#1F1A24",
  error: "#CF6679",
};

export const lightTheme = {
  primaryPurple: "#BB86FC",
  primaryBlue: "#3700B3",
  secondaryTeal: "#03DAC5",
  background: "#1F1A24",
  textColor: "#121212",
  error: "#CF6679",
};

{/* <React.Fragment>
  <GlobalStyle />
</React.Fragment>; */}
