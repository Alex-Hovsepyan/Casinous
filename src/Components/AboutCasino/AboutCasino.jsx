import * as S from './AboutCasino.styled';
import cards from '../../assets/images/shape.png';
import {isArray} from "@craco/craco/dist/lib/utils";
import Button from "../Button/Button";
import {GlobalContainer} from "../GlobalContainer/GlobalContainer.styled";

const AboutCasino = ({text, img, btn}) => {
  return (
    <S.AboutCasino>
      <S.CardsImg>
        <img src={cards} alt='Cards img'/>
      </S.CardsImg>
      <GlobalContainer>
        <S.AboutCasinoContainer>
          <S.AboutCasinoLeft>
            <S.Title>About The Casino</S.Title>
            {isArray(text) ? text.map((item, index) => (
              <S.Text key={index}>{item}</S.Text>
            )) : <S.Text>{text}</S.Text>}
            <Button $padding='1.125rem 2.25rem' $fontSize='1.125rem'>{btn}</Button>
          </S.AboutCasinoLeft>
          <S.RightImg>
            <img src={img} alt='right img'/>
          </S.RightImg>
        </S.AboutCasinoContainer>
      </GlobalContainer>
    </S.AboutCasino>
  )
}

export default AboutCasino