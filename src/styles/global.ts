import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;

    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --cyan-light: #F7F8FC;
    --cyan-dark: #005D73;

    --gray-light: #C4C4C4;

    --gray-300: #F0F0F0;
    --gray-400: #9F9F9F;

    --text-title: var(--cyan-dark);
    --text-body: #969cb3;
    --error-color: #E44132;

    --background: var(--white);
    --shape: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px){
      font-size: 93.75%
    }

    @media(max-width: 720px){
      font-size: 87.5%
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
    padding-bottom: 1rem;
    color: var(--text-title);
  }

  strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
