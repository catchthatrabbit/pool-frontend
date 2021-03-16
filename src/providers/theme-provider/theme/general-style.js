import { createGlobalStyle } from 'styled-components'
import { colorVariables } from '../../../styles/variables'
import applyTransparence from '../../../helpers/transparentize'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.primary};
    background: ${({ theme }) => theme.colors.woodsmoke};
    color: ${({ theme }) => theme.colors.white};
    font-size: 24px;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 164px 0 0;
    overflow: visible;
    width: 100%;
    
    @media screen and (min-width: ${({ theme }) =>
      theme.responsive.tablet.medium}) {
      margin-top: 120px;
    }
    @media screen and ${({ theme }) => theme.mediaQueriesMaxWidth.laptopL} {
      width: 90%;
      max-width: 1640px;
    }
  }
  
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-button {
    width: 13px;
    height: 13px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colorVariables.gunPowder};
    border: 0 none ${colorVariables.white};
    border-radius: 47px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${applyTransparence(0.7, colorVariables.gunPowder)};
  }
  ::-webkit-scrollbar-track {
    background: ${colorVariables.santasGray};
    border: 0 none;
    border-radius: 50px;
    background: ${colorVariables.charade};
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`

export default GlobalStyle
