import styled from "styled-components";

export const AboutCasino = styled.section`
    padding: 8.125rem 0;
    background-color: var(--primary-color);
    position: relative;
`;

export const AboutCasinoContainer = styled.div`
  display: flex;
    align-items: center;
    gap: 3rem;
    
    @media screen and (Max-width: ${({theme}) => theme.laptop}){
        flex-direction: column;
        align-items: center;
        max-width: 45rem;
        margin: 0 auto;
    }
`;

export const AboutCasinoLeft = styled.div`
    position: relative;
    width: 50%;
    
    a {
        margin-top: 3.375rem;
    }

    @media screen and (Max-width: ${({theme}) => theme.laptop}){
        width: 100%;
    }
`;

export const Title = styled.h3`
    font-size: 3.125rem;
    margin: 0;
    font-family: Josefin-Sans, sans-serif;
    color: var(--title-color);

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        font-size: 2.25rem;
    }
`;

export const Text = styled.p`
    font-family: Open-Sans, sans-serif;
    color: var(--text-color);
    font-size: 1.125rem;
    line-height: 1.7;
    margin: 1rem 0 0;

    @media screen and (max-width: ${({theme}) => theme.mobile}){
        font-size: 1rem;
    }
`;

export const RightImg = styled.div`
    width: 50%;

    @media screen and (Max-width: ${({theme}) => theme.laptop}){
        width: 100%;
        
        img {
            width: 100%;
            height: 100%;
        }
    }
`;

export const CardsImg = styled.div`
    position: absolute;
    top: 30px;
    left: 50px;
    max-width: 18.75rem;
    opacity: 0.1;
    
    img {
        width: 100%;
        height: 100%;
    }
`;