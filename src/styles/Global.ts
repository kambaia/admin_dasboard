
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;700;800&display=swap');
:root{
    --orange:#F79F1F;
    --text-color-1:#444;
    --text-color-2:#666;
    --bg-color-1:#fff;
    --bg-color-2:#eee;
    --box-shadow:0 .5rem 1.5rem rgba(0,0,0,.1);
}

*{
    font-family: 'Heebo', sans-serif;
    margin:0; padding:0;
    box-sizing: border-box;
    outline: none; border:none;
    text-decoration: none;
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-padding-top: 7rem;
    scroll-behavior: smooth;
}

html::-webkit-scrollbar{
    width:.8rem;
}

html::-webkit-scrollbar-track{
    background:transparent;
}

html::-webkit-scrollbar-thumb{
    background:var(--orange);
    border-radius: 1rem;
}

body{
    background:var(--bg-color-2);
    /*font-family: 'Poppins', sans-serif;*/
    font-family: 'Roboto', sans-serif;
}

body.active{
    --text-color-1:#fff;
    --text-color-2:#eee;
    --bg-color-1:#333;
    --bg-color-2:#222;
    --box-shadow:0 .5rem 1.5rem rgba(0,0,0,.4);
}

body, input, button, textarea{
    font: 400 16px 'Roboto', sans-serif;
}
`;
