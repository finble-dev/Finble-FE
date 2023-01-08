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
    --type-gray-4: #A5A5A5;
    --type-gray-5: #DADADA;
    --type-gray-6: #F7F8FA;
    --type-white: #ffffff;

    // font-weight
    --fw-h1: 700;
    --fw-h2: 700;
    --fw-t1: 500;
    --fw-t2: 500;
    --fw-t3: 500;
    --fw-b1: 500;
    --fw-b2: 500;
    --fw-b3: 500;
    --fw-b4: 500;
    --fw-small: 700;
    --fw-input: 400;

    // font-size
    --fs-h1: 38px;
    --fs-h2: 32px;
    --fs-t1: 38px;
    --fs-t2: 32px;
    --fs-t3: 24px;
    --fs-b1: 22px;
    --fs-b2: 18px;
    --fs-b3: 16px;
    --fs-b4: 14px;
    --fs-small: 18px;
    --fs-input: 22px;
  }
`;

export default GlobalStyles;
