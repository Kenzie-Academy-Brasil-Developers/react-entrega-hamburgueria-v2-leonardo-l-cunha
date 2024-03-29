import styled from "styled-components";

export const Modal = styled.div`
    position:fixed;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh;
    inset: 0;
    z-index:99;

    background-color:var(--color-background-2);
`
export const ModalBox = styled.div`
    background-color:var(--color-background-1);
    width:90%;
    max-width:400px;
    

    && > div {
        width:100%;
        height:50px;

        display:flex;
        justify-content:space-between;
        align-items:center;

        padding:20px;
       

        background-color:var(--color-primary);
    }

    && div h3 {
        font-size:var(--font-size-2);
        font-weight:var(--font-weight);
        color:var(--color-grey-0);
    }

    && div button{
        font-size:var(--font-size);
        font-weight:var(--font-weight-1);
        color:var(--color-grey-1);
    }
`
export const ModalBody = styled.section`
    display:flex;
    flex-direction:column;
    gap:20px;

    padding:20px;

    background-color:var(--color-background);

    
`