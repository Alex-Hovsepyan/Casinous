import styled from "styled-components";

export const Container = styled.div`
    max-width: 34.375rem;
    width: 100%;
    position: relative;
    text-align: ${({left}) => left ? 'left' : 'center'};
    margin: 0 auto;
    
    @media screen and (max-width: ${({theme}) => theme.laptop}){
        width: 100%;
    }
`

export const TitleStyled = styled.h2`
    color: var(--title-color);
    font-family: Josefin-Sans, sans-serif;
    font-size: 3.25rem;
    margin: 0;
    
    @media screen and (max-width: ${({theme}) => theme.mobile}){
        font-size: 2.5rem;
    }
`;

export const Text = styled.p`
    margin-top: 0.625rem;
    color: var(--text-color);
    font-family: Open-Sans, sans-serif;
    line-height: 1.7;
    font-size: 1.125rem;
`;

const Title = ({title, text}) => {
  return (
    <Container>
      <TitleStyled>{title}</TitleStyled>
      <Text>{text}</Text>
    </Container>
  )
}

export default Title