import styled from "styled-components";

export const MainStyled = styled.main`
    width:100%;
    height:461px;

    display:flex;
    justify-content:center;
    align-items:center;

    gap:50px;
    margin-top: 100px;

    && section:nth-child(1) {
        width:100%;
        max-width:500px;
        display:flex;
        flex-direction:column;
        gap:19px;

        border: 2px solid #F5F5F5;
        box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
      
    }
    
    && section:nth-child(2){
        width:377px;
        display:flex;
        flex-direction:column;
        gap:50px;

        
        h1{
            font-size:40px;
        }
        h1 span {
            font-size: var(--font-size);
            color:var(--color-segundary); 
            font-weight:var(--font-weight-2)
        }

        div:nth-child(2) {
            width:100%;
            height:95px;
            border: 1px solid #E0E0E0;
            box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
            border-radius: 5px;

            display:flex;
            align-items:center;
            gap:8px;

            padding:18px;

            div{
                width: 60px;
                height: 60px;
                
                display:flex;
                align-items:center;
                justify-content:center;

                background-color:#F5F5F5;
            }

            p{
                width:261px;
                height:66px;

                text-align:center;
                margin-top: 30px;

                color:var(--color-grey-50);
                font-size:var(--font-size-1);
                font-weight:var(--font-weight-2);


            }
            p span {
                color:var(--color-grey-100);
                font-size:var(--font-size-1);
                font-weight:var(--font-weight-1);
            }
        }
    }
    @media (max-width:700px) {
        && section:nth-child(2){
            display:none;
        }
    }
    @media (max-width:500px) {
        display:flex;
        flex-direction:column-reverse;

        && section:nth-child(2){
        display: flex;
        width: 100%;
        margin-top: 46px;
        gap: 8px;
        }
    }
    
   
`

export const FormStyled = styled.form`
    display:flex;
    flex-direction:column;
    gap:25px;
    padding:24px;

    && button {
        width:100%;
        height:50px;
        background-color:var(--color-primary-100);
        border-radius: 8px;
        color:var(--color-background);
    }
    && a {
        width:100%;
        height:50px;
        background-color:var(--color-grey-0);
        border-radius: 8px;
        color:var(--color-grey-5);
        text-decoration:none;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    && span {
    width: 64%;
    max-width:327px;
    height:36px;

    text-align:center;
    margin: 0 auto;
    
    color:var(--color-grey-5);

    font-size:var(--font-size-1);
    font-weight:var(--font-weight-2);
   }
`