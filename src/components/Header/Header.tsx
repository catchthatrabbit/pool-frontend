import React, { FC, useState } from 'react'
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
import { WithRouterProps } from 'next/dist/client/with-router'
import Text from 'atoms/Text/Text'
import { useScroll } from 'providers/scroll-provider'
import Link from '../../atoms/Link/Link'

type Props = WithRouterProps

const links = [
  { text: 'Home', href: '/' },
  { text: 'BLOCKS', href: '/blocks' },
  { text: 'Payments', href: '/payments' },
  { text: 'Miners', href: '/miners' },
  { text: 'Start Mining', href: '/start-mining' },
  { text: 'Contact', href: '/contact' },
]

const Header: FC<Props> = ({}) => {
  const [menuOpened, setMenuOpened] = useState(true)

  const { pathname } = useRouter()

  const { prevScrollPos, currentScrollPos } = useScroll()
  const visible = prevScrollPos > currentScrollPos || currentScrollPos < 50

  const handleMenuClick = () => {
    setMenuOpened(!menuOpened)
  }

  const handleLinkClick = () => {
    setMenuOpened(false)
  }

  console.log('rendered')

  return (
    <HeaderStyled hidden={!visible} fullHeight={menuOpened}>
      <HeaderBodyStyled>
        <NavHeaderStyled>
          <Link to="/">
            <LogoStyled />
          </Link>
        </NavHeaderStyled>
        <HamburgerButtonStyled opened={menuOpened} onClick={handleMenuClick} />
        <NavBarStyled>
          {links.map(({ text, href }) => (
            <HeaderLinkStyled key={href} onClick={handleLinkClick}>
              <Link to={href}>
                <Text active={href === pathname} italic>
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
