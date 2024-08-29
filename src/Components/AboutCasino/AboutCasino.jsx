import * as S from './AboutCasino.styled';
import cards from '../../assets/images/shape.png';
import {isArray} from "@craco/craco/dist/lib/utils";
import Button from "../Button/Button";
import {GlobalContainer} from "../GlobalContainer/GlobalContainer.styled";
import img from '../../assets/images/AboutCasinoImg.png';

const AboutCasino = ({section}) => {
  const Sections = {
    home: {
      text: `A casino is a facility for certain types of gambling. Casinos are often built near or combined
       with hotels, resorts, restaurants, retail shopping, cruise ships, and other tourist attractions.
       Some casinos are also known for hosting live entertainment, such as stand-up comedy, concerts, and sports.`,
      btn: 'Know More',
      img: img,
    }
  }

  return (
    <S.AboutCasino>
      <S.CardsImg>
        <img src={cards} alt='Cards img'/>
      </S.CardsImg>
      <GlobalContainer>
        <S.AboutCasinoContainer>
          <S.AboutCasinoLeft>
            <S.Title>About The Casino</S.Title>
            {isArray(Sections[section].text) ? Sections[section].text.map((item, index) => (
              <S.Text key={index}>{item}</S.Text>
            )) : <S.Text>{Sections[section].text}</S.Text>}
            <Button $padding='1.125rem 2.25rem' $fontSize='1.125rem'>{Sections[section].btn}</Button>
          </S.AboutCasinoLeft>
          <S.RightImg>
            <img src={Sections[section].img} alt='right img'/>
          </S.RightImg>
        </S.AboutCasinoContainer>
      </GlobalContainer>
    </S.AboutCasino>
  )
}

export default AboutCasino