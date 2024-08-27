import * as S from './HomeTop.styled';
import {GlobalContainer} from "../../../../Components/GlobalContainer/GlobalContainer.styled";
import cartImg from '../../../../assets/images/card.png';
import Button from "../../../../Components/Button/Button";
import rightImg from '../../../../assets/images/thumb.png';
import {Play} from "../../../../assets/svg";

const HomeTop = () => {
  return (
    <S.HomeTop>
      <GlobalContainer>
        <S.HomeTopContainer>
          <S.CardImg>
            <img src={cartImg} alt='cart img'/>
          </S.CardImg>
          <S.HomeLeft>
            <S.Title>Play <span>Online Casino</span> & Win Money Unlimited</S.Title>
            <S.Text>PLAY CASINO AND EARN CRYPTO IN ONLINE. THE ULTIMATE ONLINE CASINO PLATFORM.</S.Text>
            <S.ButtonContainer>
              <Button path='/asdsad' $padding='1.25rem 2.125rem' $fontSize='1.5rem'><Play /> Play Now</Button>
              <Button path='/' $padding='1.25rem 2.125rem' $fontSize='1.5rem'>Sign Up</Button>
            </S.ButtonContainer>
          </S.HomeLeft>
          <S.RightImg>
            <img src={rightImg} alt='right img'/>
          </S.RightImg>
        </S.HomeTopContainer>
      </GlobalContainer>
    </S.HomeTop>
  )
}

export default HomeTop