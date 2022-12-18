import styled from "styled-components";

export const StyleHeader = styled.header`
    background-color:var(--color-grey-0);
    width:100%;
    height:80px;
    @media (max-width:530px) {
        &&{
            height:120px;
        }
    }
`
export const StyledDiv = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    h1{
        cursor: pointer;
    }
    span{
        font-size: var(--font-size);
        color:var(--color-segundary); 
        font-weight:var(--font-weight-2)
    }

    && div {
        display:flex;
        gap: 17px;
    }
    div button:nth-child(2){
        
        position:relative;
    }
    p{
        width: 20px;
        height: 19px;
        background-color:var(--color-primary);
        position:absolute;
        top: 4px;
        left: 15px;
        color:var(--color-background);
        border-radius: 7px;
    }

    && > div form{
        display:flex;
        align-items:center;
        border:solid 2px var(--color-grey-20);
        background-color:var(--color-background);
        padding:12px;
        height:60px;
        border-radius: 8px;
    }
    && >  div form input{
        border:none;
        width:100%;
    }

    && > div form button {
        padding: 0 2rem;
        height: 40px;
        background-color:var(--color-primary);
        color:var(--color-background);
        border-radius:8px;
    }

    

    @media(max-width:530px){
        &&{
            display:flex;
            flex-direction:column;
        }
        && > div{
            width:100%;
            margin-top:12px;
        }
        h1{
            font-size:var(--font-size);
        }
        
    }
`