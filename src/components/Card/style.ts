import styled from "styled-components";

export const DivCartProduct = styled.li`
    display:flex;
    align-items:center;
    gap:10px;
    position: relative;
    && img {
        width:70px;
        height:70px;
        background-color:var(--color-grey-20);
        border-radius: 5px;
        object-fit:cover;
    }
    && > div {
        display:flex;
        flex-direction:column;
        gap:10px;
    }

    && > div h4{
        font-size:var(--font-size-1);
        font-weight: var(--font-weight-1);
        color: var(--color-grey-1);
        max-width: 15ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    && > div span{
        font-size:var(--font-size-2);
        font-weight:var(--font-weight-2);
        color:var(--color-grey-50);
    }
    && button {
        font-size:var(--font-size-2);
        font-weight:var(--font-weight-3);
        color:var(--color-grey-10);
        margin-left: 46px;
        margin-bottom: 29px;
        position:absolute;
        top:0;
        right:0;
        
    }
`