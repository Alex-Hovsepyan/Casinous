import styled, {css} from "styled-components";

export const Header = styled.header`
    background-color: ${({isScrolled}) => isScrolled ? 'var(--dark-purple)' : 'transparent'};
    border-bottom: 1px solid ${({isScrolled}) => isScrolled ? 'rgba(255, 200, 39, 0.1)' : 'transparent'};
    position: fixed;
    inset: 0 0 auto 0;
    transition: all 0.3s ease;
    z-index: 10;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 82rem;
    margin: 0 auto;
    padding: 1.25rem 0.75rem;
    
    img {
        max-width: 11.25rem;
        max-height: 3.75rem;
    }
    
    @media screen and (max-width: ${({theme}) => theme.laptop}){
        max-width: 45rem;
    }
`;

export const Nav = styled.nav`
    ${({isLapTop}) => isLapTop && css`
        position: absolute;
        inset: 0 0 auto 0;
    `}
`;

export const List = styled.ul`
    height: 100%;
    display: flex;
    
    ${({isLapTop}) => isLapTop && css`
        position: absolute;
        width: 100%;
        top: ${({isOpenMenu}) => isOpenMenu ? '0' : '-700px'};
        visibility: ${({isOpenMenu}) => isOpenMenu ? 'visible' : 'hidden'};
        flex-direction: column;
        padding: 3.125rem 1.875rem;
        height: max-content;
        background-color: var(--dark-purple);
        transition: all 0.3s ease;
    `}
`;

export const Item = styled.li`
    position: relative;
    display: flex;
    height: 100%;
    text-transform: uppercase;
    font-family: 'Josefin-Sans';
    color: var(--title-color);
    font-weight: bold;
    
    &:nth-child(5):hover ul {
        opacity: 1;
    }
    
    @media screen and (max-width: ${({theme}) => theme.laptop}){
        width: 100%;
        font-family: 'Open-Sans', sans-serif;
        font-weight: 500;
        font-size: 0.875rem;
        height: 2.375rem;
        
        &:not(:nth-last-child(2), :last-child){
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        &:nth-child(4) div{
            left: 3rem;
            right: auto;
        }
        
        &:nth-child(6){
            flex-direction: column;
            height: ${({isOpenSubMenu}) => isOpenSubMenu ? '15rem' : '3.125rem'};
             transition: ${({isOpenSubMenu}) => isOpenSubMenu && 'height'} 0.3s ease;
            overflow: hidden;
            color: ${({isOpenSubMenu}) => isOpenSubMenu && 'var(--secondary-color)'};
            
            a {
                justify-content: space-between;
                padding: 0.75rem 0 0 0.625rem !important;
            }
            
            ul {
                width: 100%;
                position: relative;
                top: ${({isOpenSubMenu}) => isOpenSubMenu && '0 !important'};
                left: auto !important;
                background-color: transparent;
                border: none;
                box-shadow: none;
                padding: 0 0 0 1.5rem;
                opacity: 1 !important;
                transition: all 0.3s ease;
                
                li:not(:last-child) {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                }
                
                li {
                    color: var(--title-color);

                    a {
                        padding: 0.5rem 0 0.5rem 0.25rem !important;
                    }
                }
            }
            
            svg {
                margin-right: 1rem;
                transform: ${({isOpenSubMenu}) => isOpenSubMenu && 'rotate(180deg)'};
                transition: transform 0.3s ease;
                
                path {
                    fill: ${({isOpenSubMenu}) => isOpenSubMenu && 'var(--secondary-color)'};
                }
            }
        }
        
        a {
            width: 100%;
            padding: 0.75rem 0 0.75rem 0.625rem !important;
        }
    }
    
    &:nth-child(6):hover ul{
        opacity: 1;
        top: 2.5rem;
        
    }
    
    a { 
        display: flex;
        align-items: center;
        padding: 0 1rem;
        transition: all 0.3s ease;
        
        svg {
            width: 1.2rem;
            height: 1.5rem;
            margin: 0.125rem 0 0 0.25rem;
            
            path {
                fill: var(--title-color);
                transition: fill 0.3s ease;
            }
        }
        
        &:hover {
            color: var(--secondary-color);
            
            svg path {
                fill: var(--secondary-color);
            }
        }
    }
`;

export const NewBtn = styled.div`
    position: absolute;
    right: 0;
    top: -5px;    
    color: #000;
    padding: 4px 5px 2px;
    background-color: var(--secondary-color);
    font-size: 0.5rem;
    border-radius: 5px 5px 5px 0;
`;

export const SubMenu = styled.ul`
    position: absolute;
    left: -9.25rem;
    width: 14.375rem;
    padding: 0.625rem;
    background-color: var(--primary-color);
    border: 2px solid rgba(255, 200, 39, 0.4);
    box-shadow: 0 3px 12px 3px rgba(255, 82, 1, 0.1);
    opacity: 0;
    top: 2.75rem;
    transition: all 0.3s ease;
    
    &:hover {
        opacity: 1;
    }
`;

export const SubMenuItem = styled.li`
    font-size: 0.875rem;
    font-weight: 400;
    
    a {
        padding: 0.375rem 0.875rem;
        height: 2.375rem;
        
        &:hover {
            color: var(--black);
            background-color: var(--secondary-color);
            padding-left: 1.25rem;
        }
    }
`;

export const HeaderLaptopRight = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;
`

export const Icon = styled.div`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    
    svg {
        width: 100%;
        height: 100%;
        
        path {
            stroke: var(--title-color);
        }
    }
`;

export const Close = styled.span`
    position: absolute;
    right: 1rem;
    top: 1rem;
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    z-index: 1;
    cursor: pointer;
    
    &:hover svg path {
        fill: var(title-color);
    }
    
    svg {
        width: 100%;
        height: 100%;
        
        path {
            fill: #8f7a8c;
            transition: fill 0.3s ease;
        }
    }
`

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.9);
`