import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }

  body {
      background-color: ${(props) => props.theme.colors.background};
      color: ${(props) => props.theme.colors.text};
      font: 400 21px Roboto Condensed, sans-serif;
      margin-top: 70px;
  }

  h1, h2, h3 {
      font-weight: 400;
      font-family: Roboto Condensed, sans-serif;
  }

  h1 {
      font-size: 54px;
      text-transform: uppercase;

      @media(min-width: 1024px) {
          font-size: 72px;
      }
  }

  h2 {
      font-size: 36px;
      text-transform: uppercase;

      @media(min-width: 1024px) {
          font-size: 48px;
      }
  }

  h3 {
      font-size: 28px;

      @media(min-width: 1024px) {
          font-size: 24px;
      }
  }

  a {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
  }

  u {
      text-underline-position: under;
  }

  p {
      margin-bottom: 16px;
      line-height: 24px;
  }

  button {
      cursor: pointer;
  }
`
