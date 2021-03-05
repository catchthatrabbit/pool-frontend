import { string } from 'prop-types';
import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';
import Text from 'components/Text/Text';

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.mobileL} {
    flex-direction: row;
  }
`;
const ImageStyled = styled.div`
  @media screen and ${({ theme }) => theme.mediaQueriesMinWidth.mobileL} {
    margin-right: 1rem;
  }
`;

interface IProps {
  Image: ReactNode
}

const ContentTitle: FC<IProps> = ({ children: title, Image }) => (
  <WrapperStyled>
    <ImageStyled>
      {Image}
    </ImageStyled>
    <Text size='very-large' italic>{title}</Text>
  </WrapperStyled>
);

export default ContentTitle;
