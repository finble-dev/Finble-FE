import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html, body, div, p {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    // color
    --main-blue: #6792F8;
    --main-green: #4FEDAE;

    --semantic-red: #DA5752;
    --semantic-blue: #4492F7;
    --semantic-yellow: #F8D25C;
    --semantic-green: #6FC183;

    --type-black: #000000;
    --type-gray-1: #3B3B3B;
    --type-gray-2: #818181;
    --type-gray-3: #909090;
    --type-gray-3: #A7A7A7;
    --type-white: #ffffff;

    // font-weight
    --fw-h1: 700;
    --fw-h2: 700;
    --fw-h3: 700;
    --fw-b1: 500;
    --fw-b2: 400;
    --fw-b3: 500;

    // font-size
    --fs-h1: 40px;
    --fs-h2: 36px;
    --fs-h3: 32px;
    --fs-b1: 12.0056px;
    --fs-b2: 10.6717px;
    --fs-b3: 9.3377px;
  }
`;

export default GlobalStyles;
