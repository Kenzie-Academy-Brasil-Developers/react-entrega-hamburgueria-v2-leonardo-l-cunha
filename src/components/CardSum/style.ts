import styled from "styled-components";

export const StyleDivTotal = styled.div`

    width:100%;
    height:122px;
    background-color:var(--color-grey-0);
    border-top:solid 2px var(--color-grey-20);
    padding:14px 10px;
    
    && > div {
        display:flex;
        justify-content:space-between;
    }
    && > div p {
        font-size:var( --font-size-1);
        font-weight:var(--font-weight-1);
        color:var(--color-grey-100);
    }
    && > div span{
        font-size:var( --font-size-1);
        font-weight:var(--font-weight-1);
        color:var(--color-grey-50);
    }

    && > button{
        width:100%;
        background-color:var(--color-grey-20);
        color:var(--color-grey-50);
        height:60px;
        margin-top:22px;

        font-size:var(--font-size-3);
        font-weight:var(--font-weight-1);
        text-align:center;
        border-radius: 8px;
    }
`