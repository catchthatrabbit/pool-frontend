import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { minWidth } from 'helpers/responsive'

const MainContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: visible;
  width: 100%;
  margin: 114px 0 0;
  overflow-x: hidden;
  ${minWidth(
    'laptopL',
    css`
      margin: 170px 0 0;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      margin: 164px 0 0;
    `,
  )}
`

const MainContent: FC = ({ children }) => (
  <MainContentStyled>{children}</MainContentStyled>
)

export default MainContent
