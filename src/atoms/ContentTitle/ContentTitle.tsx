import styled from 'styled-components'
import React, { FC, ReactNode } from 'react'
import Text from 'atoms/Text/Text'

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.mobileL} {
    flex-direction: row;
  }
`
const ImageStyled = styled.div`
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.mobileL} {
    margin-right: 25px;
  }
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
