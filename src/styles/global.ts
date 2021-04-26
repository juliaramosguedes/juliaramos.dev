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
  }

  h1, h2, h3 {
      font-weight: 400;
      font-family: Roboto Condensed, sans-serif;
      text-transform: uppercase;
  }

  h1 {
      font-size: 64px;

      @media(min-width: 1024px) {
          font-size: 96px;
      }
  }

  h2 {
      font-size: 48px;

      @media(min-width: 1024px) {
          font-size: 72px;
      }
  }

  h3 {
      font-size: 24px;
  }

  a {
      color: inherit;
      text-decoration: none;
  }

  u {
      text-underline-position: under;
  }

  p {
      margin-bottom: 24px;
      line-height: 30px;
  }
`
