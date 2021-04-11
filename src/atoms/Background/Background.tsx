import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { minWidth } from 'helpers/responsive'

const BackgroundStyled = styled.img<IProps>`
  width: 100%;
  position: absolute;
  top: 30%;
  ${minWidth(
    'desktop',
    css`
      top: 10%;
    `,
  )}
`
interface IProps {
  image?: string
}

const Background: FC<IProps> = ({ image = '/images/statistics_bg.png' }) => (
  <BackgroundStyled src={image} alt="background image" />
)

export default Background
