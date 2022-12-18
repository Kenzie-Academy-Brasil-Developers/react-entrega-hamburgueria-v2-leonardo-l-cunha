import { createGlobalStyle  } from "styled-components";

 const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    :root {
    --color-background: #FFFFFF;
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-primary-100:#219653;
    --color-segundary: #EB5757;
    --color-grey-100: #333333;
    --color-grey-50: #828282;
    --color-grey-20: #E0E0E0;
    --color-grey-10:#BDBDBD;
    --color-grey-0: #F5F5F5;
    --color-grey: #333333;
    --color-grey-5: #999999;
    --negative: #E60000;
    --warning: #FFCD07;
    --sucess:#168821;
    --information: #155BCB;

    --font-weight: 700;
    --font-weight-1: 600;
    --font-weight-3: 500;
    --font-weight-2: 400;

    --font-size:1.12rem;
    --font-size-1:0.85rem;
    --font-size-2:0.75rem;
    --font-size-3:1rem;

    }


    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
    }
    body{
        font-family: 'Inter', sans-serif;
    }
    body,html{
    width: 100vw;
    height: 100vh;
     }
    button{
        cursor: pointer;
        background-color:transparent;
        border:none;
    }
    ul , ol,li{
        list-style:none;
    }

    fieldset{
        border:none;
    }

    
`
export default GlobalStyle