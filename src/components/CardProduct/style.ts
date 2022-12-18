import styled from "styled-components";


export const CartContainer = styled.ul`
    display:flex;
    flex-direction:column;
    gap:15px;
    min-height:150px;
    max-height:343px;
    padding:20px 10px;
    overflow-y:auto;

    && > div{
        display:flex;
        align-items:center;
        flex-direction:column;
        justify-content:center;
        gap:16px;
    }
    && > div p{
        font-size:var(--font-size);
        font-weight:var(--font-weight);
        color:var(--color-grey-100);
    }
    && > div span{
        font-size:var(--font-size-2);
        font-weight:var(--font-weight-2);
        color:var(--color-grey-50);
    }
   @media (max-width:530px) {
        &&{
            width:100%;
        }
   }
    
`
