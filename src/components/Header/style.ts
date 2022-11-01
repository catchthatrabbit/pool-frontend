import styled, { css } from 'styled-components'
import { LogoIcon, LogoCommunityIcon } from 'atoms/icons'
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
  ${({ hidden }) => hidden && `top: -120px;`}
  ${({ fullHeight }) =>
    fullHeight &&
    `
      height: 100%;
    `}
  ${minWidth(
    'laptopL',
    css`
      padding: 10px 0 10px;
      height: 80px;
    `,
  )}
    ${minWidth(
    'desktop',
    css`
      padding: 20px 0 17px;
      height: 82px;
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
      max-width: 90vw;
      flex-direction: row;
      justify-content: space-between;
      height: 70px;
    `,
  )}
   ${minWidth(
    'desktop',
    css`
      max-width: 90vw;
      height: 50px;
    `,
  )}
`

const NavHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  & > a {
    border-bottom: 0;
  }
  & > a:hover {
    text-decoration: none;
  }
  ${minWidth(
    'laptopL',
    css`
      width: 40%;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      width: 90vw;
    `,
  )}
`

const LogoStyled = styled(LogoIcon)`
  width: 120px;
  height: auto;
  transform: scale(0.8);
  ${minWidth(
    'laptopL',
    css`
      transform: scale(1);
    `,
  )}
`

const LogoCommunityStyled = styled(LogoCommunityIcon)`
  width: 120px;
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
  margin: 15px 20px;
  & > a {
    border-bottom: 0;
  }
  & > a:hover {
    text-decoration: none;
  }
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
  LogoCommunityStyled,
  LogoStyled,
  NavBarStyled,
  HamburgerButtonStyled,
  HeaderLinkStyled,
}
