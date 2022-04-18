import { useState } from 'react'
import { useRouter } from 'next/router'

import {
  HeaderStyled,
  HeaderBodyStyled,
  NavHeaderStyled,
  LogoStyled,
  HamburgerButtonStyled,
  NavBarStyled,
  HeaderLinkStyled,
} from './style'
import Text from 'atoms/Text/Text'
import { useScroll } from 'providers/scroll-provider'
import Link from 'atoms/Link/Link'


const links = [
  { text: 'Blocks', href: '/blocks' },
  { text: 'Payments', href: '/payments' },
  { text: 'Miners', href: '/miners' },
  { text: 'Contact', href: '/contact' },
  { text: 'Start mining', href: '/start-mining' },
]

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const { pathname } = useRouter()

  const { prevScrollPos, currentScrollPos } = useScroll()
  const visible = prevScrollPos > currentScrollPos || currentScrollPos < 50

  const headerHiddenState = menuOpened ? false : !visible

  const handleMenuClick = () => {
    setMenuOpened(!menuOpened)
  }

  const handleLinkClick = () => {
    setMenuOpened(false)
  }

  return (
    <HeaderStyled hidden={headerHiddenState} fullHeight={menuOpened}>
      <HeaderBodyStyled>
        <NavHeaderStyled>
          <Link to="/">
            <LogoStyled />
          </Link>
          <HamburgerButtonStyled
            opened={menuOpened}
            onClick={handleMenuClick}
          />
        </NavHeaderStyled>
        <NavBarStyled isOpen={menuOpened}>
          {links.map(({ text, href }) => (
            <HeaderLinkStyled key={href} onClick={handleLinkClick}>
              <Link to={href}>
                <Text active={href === pathname} size={'large'} color={(href === '/start-mining') ? 'apple' : 'white'} >
                  {text}
                </Text>
              </Link>
            </HeaderLinkStyled>
          ))}
        </NavBarStyled>
      </HeaderBodyStyled>
    </HeaderStyled>
  )
}

export default Header
