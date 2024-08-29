import styled from "styled-components";
import background from '../../assets/images/shape1.png';

export const GamesContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    position: relative;
    margin-top: 3.375rem;
`

export const GamesContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc((100% - 1.5rem * 3) / 4);
    padding: 2.125rem 2.5rem;
    box-shadow: -3.828px -3.828px 6px 0px rgba(255, 200, 39, 0.4), 3px 5px 8px 0px rgba(255, 82, 1, 0.2);
    border-radius: 0.625rem;
    font-family: Open-Sans, sans-serif;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
    
    &:hover div:last-child {
        width: 2.75rem;
        height: 2.75rem;
    }
    
    &:hover {
        box-shadow: -4.828px -4.828px 12px 0px rgba(255, 200, 39, 0.4), 3px 5px 15px 0px rgba(255, 82, 1, 0.2);
    }
    
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        width: 80%;
        margin: 0 auto;
    }
    
    @media screen and (min-width: ${({theme}) => theme.mobile}) and (max-width: ${({theme}) => theme.laptop}){
        width: calc((100% - 1.5rem * 1) / 2);
    }

    @media screen and (min-width: ${({theme}) => theme.laptop}) and (max-width: ${({theme}) => theme.desktop}){
        width: calc((100% - 1.5rem * 2) / 3);
    }
    
    &:before {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url(${background});
        z-index: 0;
    }
    
    &:after {
        content: "";
        position: absolute;
        inset: 0;
        background-color: var(--dark-purple);
        opacity: 0.9;
    }
`;

export const ImgContainer = styled.div`
    width: 100%;
    background-color: var(--dark-purple);
    position: relative;
    padding-top: 64%;
    border-radius: 0.625rem;
    border: 1px solid rgba(255, 255, 255, 0.17);
    z-index: 1;
    
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 92%;
        height: 83%;
        transform: translate(-50%, -50%);
        object-fit: contain;
    }
`;

export const Name = styled.h4`
    margin: 1.5rem 0 0;
    font-size: 1.5rem;
    color: var(--title-color);
    font-family: Josefin-Sans, sans-serif;
    font-weight: 400;
    z-index: 1;
`;

export const LimitText = styled.div`
    font-size: 1.125rem;
    margin-top: 1rem;
    text-transform: uppercase;
    color: var(--text-color);
    z-index: 1;
`

export const Limit = styled.div`
    margin: 0.5rem 0 1.5rem;
    font-size: 1.125rem;
    color: var(--secondary-color);
    z-index: 1;
`;

export const Circle = styled.div`
    width: 2.125rem;
    height: 2.125rem;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 0;
    box-shadow: -3.828px -3.828px 6px 0px rgba(255, 200, 39, 0.4), 3px 5px 8px 0px rgba(255, 82, 1, 0.2);
    z-index: 1;
    transform: rotate(45deg);
    transition: all 0.3s ease;
`