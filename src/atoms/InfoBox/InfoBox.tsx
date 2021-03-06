import styled from 'styled-components';
import React, { FC } from 'react';
import Text from 'src/atoms/Text/Text';

const WrapperStyled = styled.div`
  padding: 18px 0;
  height: 88px;
  width: 260px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.spindle};
  border-radius: 10px;
`;

interface IProps {
  value: string;
  title: string;
}
const InfoBox: FC<IProps> = ({ value, title }) => (
  <WrapperStyled>
    <Text size='very-large' fontWeight='bold' italic>{value}</Text>
    <Text size='small' fontWeight='light'>{title}</Text>
  </WrapperStyled>
);

export default InfoBox;
