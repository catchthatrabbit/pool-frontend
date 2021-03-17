import React, { FC } from 'react'
import styled from 'styled-components'

const StyledBackground = styled.img<IProps>`
  width: 100%;
  position: absolute;
  top: 10%;
`
interface IProps {
  image?: string
}

const Background: FC<IProps> = ({ image = 'images/statistics_bg.png' }) => (
  <StyledBackground src={image} alt="background image" />
)

export default Background
