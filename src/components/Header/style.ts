import styled, { css } from 'styled-components'
import { LogoIcon } from 'atoms/icons'
import HamburgerButton from 'atoms/HamburgerButton/HamburgerButton'
import { colorVariables } from 'styles/variables'
import { minWidth } from 'helpers/responsive'

interface IHeader {
  hidden: boolean
  fullHeight: boolean
}

const HeaderStyled = styled.header<IHeader>`
  padding: 10px 0 0;
  height: auto;
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
  ${({ fullHeight }) =>
    fullHeight &&
    `
      height: 100%;
    `}
  ${minWidth(
    'laptopL',
    css`
      padding: 20px 0 20px;
      height: 160px;
    `,
  )}
    ${minWidth(
    'desktop',
    css`
      padding: 40px 0 34px;
      height: 164px;
    `,
  )}
`

const HeaderBodyStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  ${({ hidden }) =>
    hidden &&
    `
    max-width: 86%;
    flex-direction: column;
  `}
  ${minWidth(
    'laptopL',
    css`
      max-width: 95%;
      flex-direction: row;
      justify-content: space-between;
      height: 140px;
    `,
  )}
   ${minWidth(
    'desktop',
    css`
      max-width: 86%;
      height: 100px;
    `,
  )}
`

const NavHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  ${minWidth(
    'laptopL',
    css`
      width: 40%;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      width: 90%;
    `,
  )}
`

const LogoStyled = styled(LogoIcon)`
  width: 240px;
  height: auto;
  transform: scale(0.8);
  ${minWidth(
    'laptopL',
    css`
      transform: scale(1);
    `,
  )}
`

const NavBarStyled = styled.nav`
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${(props: { isOpen: boolean }) =>
    props.isOpen &&
    css`
      display: flex;
      margin-top: 40px;
      body * {
        overflow-y: hidden;
      }
    `}
  ${minWidth(
    'laptopL',
    css`
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 50px;
      justify-content: space-between;
    `,
  )}
`

const HeaderLinkStyled = styled.div`
  margin: 15px 0;
`

const HamburgerButtonStyled = styled(HamburgerButton)`
  ${minWidth(
    'laptopL',
    css`
      display: none;
    `,
  )}
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
