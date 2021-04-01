import React, { FC } from 'react'
import styled from 'styled-components'

const BackgroundStyled = styled.img<IProps>`
  width: 100%;
  position: absolute;
  top: 10%;
`
interface IProps {
  image?: string
}

const Background: FC<IProps> = ({ image = 'images/statistics_bg.png' }) => (
  <BackgroundStyled src={image} alt="background image" />
)

export default Background
