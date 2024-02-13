import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import AaOrdinary from '../assets/fonts/Aa오디너리.ttf';

const GlobalStyled = createGlobalStyle`
  @font-face {
  font-family: "AaOrdinary";
  src: url(${AaOrdinary}) format("truetype");
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

  body{
    box-sizing: border-box;
    width: 375px;
    height: 100vh;
    background-color: #D2D2D2;
    margin: 0 auto;

    font-family: 'AaOrdinary', sans-serif;
    font-weight: 400;
  }

`;

export default GlobalStyled;
