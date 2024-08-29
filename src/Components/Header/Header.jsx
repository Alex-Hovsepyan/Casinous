import * as S from './Header.styled'
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.png';
import {Arrow, BurgerMenu, XMark} from "../../assets/svg";
import {useEffect, useState} from "react";
import Button from "../Button/Button";
import {useMediaQuery} from "react-responsive";

const Pages = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'about',
    path: '/',
  },
  {
    name: 'games',
    path: '/',
    isNew: true,
  },
  {
    name: 'faq',
    path: '/',
  },
  {
    name: 'pages',
    path: '',
    hasArrow: true
  },
  {
    name: 'blog',
    path: '/',
  },
  {
    name: 'contact',
    path: '/',
  },
]

const SubMenuPages = [
  {
    name: 'User dashboard',
    path: '/',
  },
  {
    name: 'privacy policy',
    path: '/',
  },
  {
    name: 'terms & conditions',
    path: '/',
  },
  {
    name: 'sign in',
    path: '/',
  },
  {
    name: 'sign up',
    path: '/',
  },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const isLapTop = useMediaQuery({maxWidth: 991})
  const isMobile = useMediaQuery({minWidth: 575})
  const [isOpenedMenu, setIsOpenedMenu]= useState(false)
  const [isOpenedSubMenu, setIsOpenedSubMenu] = useState(false)

  window.onscroll = () => {
    window.scrollY ? setIsScrolled(true) : setIsScrolled(false)
  }

  useEffect(() => {
    const body = document.querySelector('body')

    if(isOpenedMenu){
      body.style.height = '100vh'
      body.style.overflow = 'hidden'
    }
    else {
      body.style.height = 'max-content'
      body.style.overflow = 'visible'
    }
  }, [isOpenedMenu])

  return (
    <S.Header isScrolled={isScrolled}>
      {isOpenedMenu && isLapTop && <S.Overlay onClick={() => setIsOpenedMenu(false)}></S.Overlay>}
      <S.HeaderContainer>
        <Link to={'/'}><img src={logo} alt='logo'/></Link>
        {isLapTop && (
          <S.HeaderLaptopRight>
            <S.Icon onClick={() => setIsOpenedMenu(true)}>
              <BurgerMenu/>
            </S.Icon>
            {isMobile && <Button>Sign In</Button>}
          </S.HeaderLaptopRight>
        )}
        <S.Nav isLapTop={isLapTop}>
          <S.List isOpenMenu={isOpenedMenu} isLapTop={isLapTop}>
            {isLapTop && isOpenedMenu && (
              <S.Close onClick={() => setIsOpenedMenu(false)}>
                <XMark />
              </S.Close>
            )}
            {Pages.map((item, index) => (
              <S.Item isOpenSubMenu={isOpenedSubMenu} onClick={() => index === 4 && setIsOpenedSubMenu(!isOpenedSubMenu)} isLapTop={isLapTop} key={index}>
                {item.isNew && <S.NewBtn>New</S.NewBtn>}
                <Link to={item.path}>{item.name} {item.hasArrow && <Arrow/>}</Link>
                {item.hasArrow &&
                  <S.SubMenu>
                    {SubMenuPages.map((item, index) => (
                      <S.SubMenuItem key={index}>
                        <Link to={'/dsfsdf'}>{item.name}</Link>
                      </S.SubMenuItem>
                    ))}
                  </S.SubMenu>
                }
              </S.Item>
            ))}
          </S.List>
        </S.Nav>
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header