import styled from "styled-components";
import background from '../../../../assets/images/bg3.jpg';

export const Wrapper = styled.section`
    background-image: url(${background});
    position: relative;
    padding: var(--section-padding);
    
    &:before {
        content: "";
        position: absolute;
        inset: 0;
        background-color: var(--dark-purple);
        opacity: 0.9;
    }
`

