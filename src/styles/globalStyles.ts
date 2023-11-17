import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  :focus{ 
  outline: transparent;
  }

  li{
    list-style: none;
  }
  
  body, input, textarea, button{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.white};
  }

  

  a{
    color: ${props => props.theme.white};
    text-decoration: none;
  }

  body, html {
    background:  ${props => props.theme["dark-10"]};
  }

  .react-modal-overlay {
     background: rgba(0,0,0,0.5);

     position: fixed;
     top: 0;
     bottom: 0;
     right: 0;
     left: 0;

     display: flex;
     align-items: center;
     justify-content: center;
     z-index: 999;
  }

  .react-modal-content{
    width: 100%;
    max-width: 70rem;
    background: ${props => props.theme["bg-modal"]};
    padding: 1rem;
    position: relative;
    border-radius: 1rem;
  }
`