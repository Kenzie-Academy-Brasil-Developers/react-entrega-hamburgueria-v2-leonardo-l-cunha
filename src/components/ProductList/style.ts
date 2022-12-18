import styled from "styled-components";

export const StyledUl = styled.ul`
    display:flex;
    flex-wrap: wrap;
    gap:20px;
    width:100%;
    

    @media(max-width:530px){
        flex-wrap:nowrap;
        overflow-y:auto;
        width:100;
    }
`