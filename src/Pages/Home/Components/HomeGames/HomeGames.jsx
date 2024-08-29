import * as S from './HomeGames.styled';
import {GlobalContainer} from "../../../../Components/GlobalContainer/GlobalContainer.styled";
import Title from "../../../../Components/Title/Title";
import {
  Circle,
  GamesContainer,
  GamesContent,
  ImgContainer, Limit, LimitText,
  Name
} from "../../../../Components/GamesContainer/GamesContainer.styled";
import img1 from '../../../../assets/images/item1.png'
import img2 from '../../../../assets/images/item2.png'
import img3 from '../../../../assets/images/item3.png'
import img4 from '../../../../assets/images/item4.png'
import img5 from '../../../../assets/images/item5.png'
import img6 from '../../../../assets/images/item6.png'
import Button from "../../../../Components/Button/Button";

const HomeGames = () => {
  const data = [
    {
      img: img1,
      name: 'Roulette',
      limitTitle: 'Invest Limit',
      limit: '$10.49 - $1,000',
      path: '',
    },
    {
      img: img2,
      name: 'Zero To Ninty',
      limitTitle: 'Invest Limit',
      limit: '$10.49 - $1,000',
      path: '',
    },
    {
      img: img3,
      name: 'Number Buy',
      limitTitle: 'Invest Limit',
      limit: '$10.49 - $1,000',
      path: '',
    },
    {
      img: img4,
      name: 'Roulette',
      limitTitle: 'Invest Limit',
      limit: '$10.49 - $1,000',
      path: '',
    },
    {
      img: img5,
      name: 'Card Game',
      limitTitle: 'Invest Limit',
      limit: '$10.49 - $1,000',
      path: '',
    },
    {
      img: img6,
      name: 'Dice Rolling',
      limitTitle: 'Invest Limit',
      limit: '$10.49 - $1,000',
      path: '',
    },
    {
      img: img2,
      name: 'Card Game',
      limitTitle: 'Invest Limit',
      limit: '$10.49 - $1,000',
      path: '',
    },
    {
      img: img5,
      name: 'Dice Rolling',
      limitTitle: 'Invest Limit',
      limit: '$10.49 - $1,000',
      path: '',
    },
  ]

  return (
    <S.Wrapper>
      <GlobalContainer>
        <Title title='Top Awesome Games' text='A casino is a facility for certain types of gambling.
                                              Casinos are often built combined with hotels, resorts,.' />
        <GamesContainer>
          {data.map((item, index) => (
            <GamesContent key={index}>
                <ImgContainer>
                  <img src={item.img} alt='game'/>
                </ImgContainer>
                <Name>{item.name}</Name>
                <LimitText>{item.limitTitle}</LimitText>
                <Limit>{item.limit}</Limit>
              <Button noBorderRadius>Play Now</Button>
              <Circle></Circle>
            </GamesContent>
          ))}
        </GamesContainer>
      </GlobalContainer>
    </S.Wrapper>
  )
}

export default HomeGames