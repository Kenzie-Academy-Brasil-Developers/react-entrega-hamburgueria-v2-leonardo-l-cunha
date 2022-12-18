import styled from "styled-components"

export const FieldStyled = styled.fieldset`
    position: relative;
    

    && label{
        position: absolute;
        top: -6px;
        left: 13px;
        
        background: #ffff;
        
        width: 44px;
        height: 21px;

        
    }
        
    
    && input {
        width:100%;
        height:50px;

        border: 2px solid var(--color-grey-100);
        border-radius:8px;

        padding-left: 10px;
    }
`