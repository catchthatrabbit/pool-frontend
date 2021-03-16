import React, { FC } from 'react'
import styled from 'styled-components'

const StyledBackground = styled.div<IProps>`
  background: url(${(props: IProps) => props.image}) no-repeat;
  background-size: 1920px 934px;
  width: 1920px;
  height: 934px;
  position: absolute;
  top: 10%;
`
interface IProps {
  image?: string
}

const Background: FC<IProps> = ({ image = 'images/statistics_bg.png' }) => (
  <StyledBackground image={image} />
)

export default Background
