import { css } from 'styled-components';
import('./font.css')

export const globalStyles = css`
  html {
    font-size: 16px;
      
    &::-webkit-scrollbar {
      display: none;
    }
  }

  body {
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: currentColor;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :root {
      --title-color: #fff;
      --primary-color: #350b2d;
      --secondary-color: #FFC827;
      --dark-purple: #2e0327;
      --black: #1f1f23;
      --text-color: #ffffffcc;
  }
`;
