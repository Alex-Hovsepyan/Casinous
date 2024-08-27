import {createGlobalStyle} from "styled-components";
import {normalizeStyles} from "./normalize";
import {globalStyles} from "./global.styles";

export const GlobalStyledProvider = createGlobalStyle`
    ${normalizeStyles}
    
    ${globalStyles}
`