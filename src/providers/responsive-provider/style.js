import { createGlobalStyle } from 'styled-components'
import { mediaQueriesMinWidth, mediaQueriesMaxWidth } from './utils'

const createMediaQueriesHelper = () => {
  let result = []

  for (let mediaQuery in mediaQueriesMaxWidth) {
    const mediaQueriyCss = `
        @media screen and ${mediaQueriesMaxWidth[mediaQuery]} {
          div[_hide_at="${mediaQuery}"] {
            display: none;
          }
          div[_show_at="${mediaQuery}"] {
            display: block;
            width: 100%;
          }
        }
      `
    result.push(mediaQueriyCss)
  }
  for (let mediaQuery in mediaQueriesMinWidth) {
    const mediaQueriyCss = `
        @media screen and ${mediaQueriesMinWidth[mediaQuery]} {
          div[_hide_at="${mediaQuery}"] {
            display: block;
          }
          div[_show_at="${mediaQuery}"] {
            display: none;
          }
        }
      `
    result.push(mediaQueriyCss)
  }
  return result
}

const GlobalResponsiveStyles = createGlobalStyle`
  ${createMediaQueriesHelper()}
`

export default GlobalResponsiveStyles
