import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: Poppins;
  }

  html, body{
    height: 100%;
  }

  #root{
    min-height: 100vh;
    height: auto;
  }

  body{
    background: ${props => props.theme.global.background};
    color: ${props => props.theme.global.textColor};
    font-family: 'Poppins', sans-serif;
  }
`;