import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import AaOrdinary_ttf from '../assets/fonts/Aa오디너리.ttf';
import AaOrdinary_woff2 from '../assets/fonts/Aa오디너리.woff2';

const GlobalStyled = createGlobalStyle`
  @font-face {
  font-family: "AaOrdinary";
  src: url(${AaOrdinary_woff2}) format("woff2"), url(${AaOrdinary_ttf}) format("truetype");
  font-weight: normal;
  }

  ${reset}
  :root{                            // 자세한 컬러 파레트는 피그마 참고
    --main-color: #D2D999;        // Deco
    --sub-color: #677D22;         // Fiji Green
    --main-button-color: #FBB24D; // Koromiko
    -logo-text-color: #6B501E;    // Horse Neck
  }

  * {
    box-sizing: border-box;
    font-family: 'AaOrdinary', cursive;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'AaOrdinary', sans-serif;
    font-weight: 400;
    background-color: white;
    width: 375px;
    margin: 0 auto;
  }

  @media (min-width: 480px) {
    body {
      background-color: #d2d2d2;
    }
  }

`;

export default GlobalStyled;
