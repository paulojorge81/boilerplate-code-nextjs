import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
        width: 3px;
    }

    ::-webkit-scrollbar-track {
        background: none;
    }


    ::-webkit-scrollbar-thumb {
        background: #8F8F8F;
        border-radius: 2px;
    }
  }

  html {
    font-size: 62.5%;

  }

  html, body, #__next {
    height: 100vh;
    min-width: 360px;
    display: block;
    overflow: hidden;


  }

  body {
    font-family: -apple-system, BlickMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Catarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }

`
export default GlobalStyles
