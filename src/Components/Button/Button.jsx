import styled from "styled-components";
import {Link} from "react-router-dom";

const ButtonStyled = styled(Link)`
    display: block;
    width: max-content;
    padding: ${({$padding}) => $padding || '0.875rem 1.5rem'};
    border-radius: ${({noBorderRadius}) => noBorderRadius ? '0' : '0.625rem'};
    font-size: ${({$fontSize}) => $fontSize};
    font-family: 'Josefin-Sans';
    background: linear-gradient(0deg, #ff9c19 40%, #ffdd2d 110%);
    color: var(--black);
    box-shadow: -3.828px -3.828px 6px 0px rgba(255, 200, 39, 0.4), 3px 5px 8px 0px rgba(255, 82, 1, 0.2);
    transition: box-shadow 0.3s ease;
    text-transform: capitalize;
    
    &:hover {
        box-shadow: 11px 11px 32px rgba(255, 82, 1, 0.2), -11px -11px 32px rgba(255, 200, 39, 0.4);
    }
`;

const Button = ({children, path, $fontSize, $padding, noBorderRadius}) => {
  return (
    <ButtonStyled noBorderRadius={noBorderRadius} $padding={$padding} $fontSize={$fontSize} to={path}>{children}</ButtonStyled>
  )
}

export default Button