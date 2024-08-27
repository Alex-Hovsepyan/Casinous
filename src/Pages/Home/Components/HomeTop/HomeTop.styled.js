import styled from "styled-components";
import background from '../../../../assets/images/bg.png'

export const HomeTop = styled.div`
    background: url(${background}) center;
    background-size: cover;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    height: max-content;
    
    &:before {
        content: " ";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--dark-purple);
        opacity: 0.9;
    }
`

export const HomeTopContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    margin-top: 3rem;
    position: relative;

    @media screen and (max-width: ${({theme}) => theme.laptop}){
        flex-direction: column;
        align-items: center;
        gap: 3.125rem;
        text-align: center;
        margin-top: 10rem;
    }
`;

export const HomeLeft = styled.div`
    width: 100%;
    max-width: 43.75rem;
    z-index: 2;
`

export const Title = styled.h1`
    margin: 0;
    font-size: 4.375rem;
    font-family: Josefin-Sans, sans-serif;
    color: var(--title-color);
    line-height: 1.4;
    
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        font-size: 2rem;
    }
    
    @media screen and (min-width: ${({theme}) => theme.mobile}) and (max-width: ${({theme}) => theme.laptop}){
        font-size: 3.5rem;
    }
    
    span {
        color: var(--secondary-color);
        text-shadow: 3px -4px 8px rgba(255, 200, 39, 0.3);
    }
`;

export const Text = styled.p`
    max-width: 34.375rem;
    font-family: Open-Sans, sans-serif;
    font-size: 1.375rem;
    color: var(--text-color);
    line-height: 1.7;
    margin: 1rem 0 0;

    @media screen and (max-width: ${({theme}) => theme.laptop}){
        max-width: none;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 3.125rem;
    
    @media screen and (max-width: ${({theme}) => theme.laptop}){
        justify-content: center;
    }
    
    svg {
        width: 1rem;
        height: 1rem;
    }

    a:last-child{
        position: relative;
        overflow: hidden;
        z-index: 1;
        
        &:hover:before {
            top: -200px;
        }
        
        &:before {
            z-index: -1;
            content: " ";
            position: absolute;
            top: -5px;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--secondary-color);
            transition: top 0.4s ease;
        }
    }
`

export const CardImg = styled.div`
    position: absolute;
    top: 150px;
    left: -150px;
    opacity: 0.25;
    
    img {
        width: 15.625rem;
        height: 19rem;
    }
`;

export const RightImg = styled.div`
    max-width: 25rem;
    z-index: 2;
    
    @media screen and (max-width: ${({theme}) => theme.laptop}){
        max-width: 30.75rem;
        
        img {
            width: 100%;
            height: 100%;
        }
    }
`;