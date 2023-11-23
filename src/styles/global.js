import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

  html,
  body{
    font-size: 62.5%;
    height: 100%;
  }

  #root{
    width: 100vw;
    height: 100%;
  }

  body {
    color: ${( { theme }) => theme.COLORS.BLACK};

    font-family: 'Inter', sans-serif;

    height: 100%;
    width: 100vw;

    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;

  }

  h1{
    font-size: 4.8rem;
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
  }

  h2{
    font-weight: 400;
    font-size: 4.8rem;
    font-family: 'Bebas Neue', sans-serif;
    color: ${({theme}) => theme.COLORS.RED};
  }

  input,button{
    border: none;
  }

  a{
    text-decoration: none;
  }

  button, a, li:hover{
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover , a:hover, li:hover{
      filter: brightness(0.9);
  }

  body::-webkit-scrollbar{
    width: 1.2rem;
    background: transparent;
  }

  body::-webkit-scrollbar-thumb{
    background: ${({theme}) => theme.COLORS.RED};
    border-radius: 0.8rem;
  }

  .loader{
    position: absolute;
    /* width: 100%; */
    height: 100vh;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(49, 219, 157, 0);
    z-index: 6;
  }
`;
