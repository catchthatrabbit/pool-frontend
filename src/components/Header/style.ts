import styled from 'styled-components'

const HeaderStyled = styled.header`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  width: 100%;
  z-index: 100;
  background: ${({ theme }) => theme.colors.woodsmoke};
  transition: 0.3s;
  padding: 20px 0;
  height: 100px;
  @media screen and (min-width: ${({ theme }) =>
      theme.responsive.tablet.medium}) {
    height: 120px;
  }
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.laptopL} {
    height: 140px;
  }
  &.fullHeight {
    height: 100%;
    @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.laptopL} {
      body {
        overflow: visible;
      }
      height: unset;
    }
  }
  &.hidden {
    top: -200px;
  }
`

const HeaderBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1640px;
  width: 100%;
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.laptopL} {
    width: 95%;
    flex-direction: row;
    justify-content: space-between;
  }
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

const LogoStyled = styled.img`
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

const ButtonStyled = styled.button`
  height: 48px;
  width: 40px;
  background: inherit;
  border: none;
  cursor: pointer;
  user-select: none;
  .bar1,
  .bar2,
  .bar3 {
    width: 30px;
    margin: 7px 0;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.white};
    transition: background-color 0.3s ease-in-out;
    transition: 0.3s;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    .bar1,
    .bar2,
    .bar3 {
      background: ${({ theme }) => theme.colors.aluminium};
    }
  }
  &.cross {
    .bar1 {
      transform: translateY(4.5px) rotate(225deg);
    }
    .bar3 {
      transform: translateY(-4.5px) rotate(315deg);
    }
    .bar2 {
      position: absolute;
      opacity: 0.2;
      transform: translateY(7px);
    }
  }
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.laptopL} {
    display: none;
  }
`

const NavBarStyled = styled.nav`
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: auto;
  &.show {
    display: flex;
    margin-top: 40px;
  }
  a {
    margin: 15px 0;
    &:focus {
      outline: none;
    }
    @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.laptopL} {
      margin: 0 60px 0 0;
    }
  }
  h3 {
    display: inline-block;
    box-sizing: border-box;
    font-size: 18px;
    font-style: italic;
    font-weight: 500;
    padding-bottom: 10px;
    white-space: nowrap;
    height: 35px;
    transition: border 0.1s ease-in-out;
    &:hover,
    &.active {
      border-bottom: 3px solid ${({ theme }) => theme.colors.white};
    }
    @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.laptopL} {
      height: auto;
      margin: 0;
    }
  }
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.laptopL} {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
    width: auto;
  }
`

export {
  HeaderStyled,
  HeaderBodyStyled,
  NavHeaderStyled,
  LogoStyled,
  ButtonStyled,
  NavBarStyled,
}
