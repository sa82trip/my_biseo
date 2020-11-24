import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    {/* align-items: center; */}
    {/* background: #0D0C1D; */}
    {/* color: #EFFFFA; */}
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }

	.blinking{
		    background-color:gray;
            -webkit-animation:blink .5s ease-in-out infinite alternate;
            -moz-animation:blink .5s ease-in-out infinite alternate;
            animation:blink .5s ease-in-out infinite alternate;
        }
        @-webkit-keyframes blink{
            0% {opacity:0;}
            100% {opacity:1;}
        }
        @-moz-keyframes blink{
            0% {opacity:0;}
            100% {opacity:1;}
        }
        @keyframes blink{
            0% {opacity:0;}
            100% {opacity:1;}
        }
  `;
