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
  @media screen and (min-width: ${({ theme }) =>
      theme.responsive.tablet.medium}) {
    height: 120px;
  }

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      @media screen and ${({ theme }) => theme.mediaQueriesMaxWidth.laptopL} {
        body {
          overflow: visible;
        }
        height: unset;
      }
    `}

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
  width: 90%;
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.laptopL} {
    width: auto;
  }
`

const LogoStyled = styled(LogoIcon)`
  width: 140px;
  height: auto;
  @media screen and (min-width: ${({ theme }) =>
      theme.responsive.tablet.medium}) {
    width: 200px;
  }
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.laptopL} {
    width: 240px;
  }
`

const NavBarStyled = styled.nav`
  width: 930px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  justify-content: space-between;

  @media screen and ${({ theme }) => theme.mediaQueriesMaxWidth.laptopL} {
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: auto;
    display: flex;
    margin-top: 40px;
  }
`

const HeaderLinkStyled = styled.div`
  @media screen and ${({ theme }) => theme.mediaQueriesMaxWidth.laptopL} {
    margin: 15px 0;
  }
`

const HamburgerButtonStyled = styled(HamburgerButton)`
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.laptopL} {
    display: none;
  }
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
