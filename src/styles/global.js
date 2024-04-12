import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    outline: none;
    border: none;
    box-sizing: border-box;
    font-family: 'Manrope',sans-serif;
}

img{
    max-width: 100%;
    display: block;
}

html{
    font-size: 62.5%;
}

body{
    background-color: ${ ( { theme } ) => theme.COLORS.BACKGROUND };
}

button{
    background-color: transparent;
    cursor: pointer;
} 
`