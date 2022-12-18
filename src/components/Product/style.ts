import styled from "styled-components"

export const StyleLi = styled.li`
    background-color:var(--color-grey-0);
    width:23%;
    display:flex;
    flex-direction:column;
    border: solid 2px var(--color-grey-20);
    border-radius: 5px;


    && img {
        height:150px;
        object-fit:none;
    }
    @media(max-width:820px){
        &&{
            width:47%;
        }
    }
    @media(max-width:703px){
        &&{
            width:45%;
        }
    }
    @media(max-width:530px){
        &&{
            width:100%;
        }
    }
`
export const StyleDivText = styled.div`
    width:100%;
    background-color:var(--color-background);
    padding:18px;
    display:flex;
    flex-direction:column;
    gap:14px;
    align-items:flex-start;

    && h3 {
        width:100;
        font-size:var(--font-size);
        font-weight:var(--font-weight);
        color:var(--color-grey-1);
        max-width: 15ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    && span {
        font-size:var(--font-size-2);
        font-weight:var(--font-weight-2);
        color:var(--color-grey-50);
    }
    && p {
        font-size:var(--font-size-1);
        font-weight:var(--font-weight-1);
        color:var(--color-primary);
    }

    && button {
        padding: 0 2rem;
        height: 40px;
        background-color:var(--color-primary);
        color:var(--color-background);
        border-radius:8px;
    }

    @media (max-width:703px) {
        && h3 {
            font-size:var(--font-size-1);
        }
    }
   
`