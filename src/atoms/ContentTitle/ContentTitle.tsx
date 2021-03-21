import styled from 'styled-components'
import React, { FC, ReactNode } from 'react'
import Text from 'atoms/Text/Text'

const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 96px;
`
const ImageStyled = styled.div`
  margin-right: 25px;
`

interface IProps {
  Image: ReactNode
}

const ContentTitle: FC<IProps> = ({ children: title, Image }) => (
  <WrapperStyled>
    <ImageStyled>{Image}</ImageStyled>
    <Text size="very-large" italic>
      {title}
    </Text>
  </WrapperStyled>
)

export default ContentTitle
