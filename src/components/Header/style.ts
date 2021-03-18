import styled, { css } from 'styled-components'
import { LogoIcon } from 'atoms/icons'
import HamburgerButton from 'atoms/HamburgerButton/HamburgerButton'
import { colorVariables } from 'styles/variables'

interface IHeader {
  hidden: boolean
  fullHeight: boolean
}

const HeaderStyled = styled.header<IHeader>`
  padding: 40px 0 34px;
  height: 164px;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 100;
  background: ${colorVariables.woodsmoke};
  transition: 0.3s;
  box-shadow: 0 4px 18px 6px ${colorVariables.woodsmoke};
  ${({ hidden }) => hidden && `top: -200px;`}
`

const HeaderBodyStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1640px;
  width: 100%;
  height: 100%;
`

const NavHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
`

const LogoStyled = styled(LogoIcon)`
  width: 240px;
  height: auto;
`

const NavBarStyled = styled.nav`
  width: 930px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  justify-content: space-between;
`

const HeaderLinkStyled = styled.div`
  margin: 15px 0;
`

const HamburgerButtonStyled = styled(HamburgerButton)`
  display: none;
`

export {
  HeaderStyled,
  HeaderBodyStyled,
  NavHeaderStyled,
  LogoStyled,
  NavBarStyled,
  HamburgerButtonStyled,
  HeaderLinkStyled,
}
