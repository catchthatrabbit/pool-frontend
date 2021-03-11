import styled from 'styled-components';
import React, { FC } from 'react';
import Text from 'atoms/Text/Text';
import { TypeNumber } from 'types/app';

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

// export type TypeNumber = 'hashSpeed' | 'hash' | 'percent' | 'number' | 'euro';

interface IProps {
  value: number;
  title: string;
  type: TypeNumber;
}
const InfoBox: FC<IProps> = ({ value, title, type = 'hash' }) => {
  function renderValue() {
    let metric = 'GH';
    let unit = 1000;
    switch (type) {
      case 'hashSpeed':
      case 'hash':
        let metric = 'GH';
        let unit = 1000;

        if (value / unit >= 1000) {
          metric = 'TH';
          unit = 1000000;
        }
        return (
          <>
            {value / unit}
            <Text size="large" fontWeight="bold" italic> { metric }/</Text>
            {type === 'hashSpeed' && <Text size="small" fontWeight="bold" italic>s</Text>}
          </>
        );
        return (
          <>
            {value / unit}
            <Text size="large" fontWeight="bold" italic> { metric }</Text>
          </>
        );
      case 'percent':
        return `${value}%`;
      case 'euro':
        return `€ ${value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}`;
      default:
        return value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    }
  }
  return (
    <WrapperStyled>
      <Text size="very-large" fontWeight="bold" italic>
        {renderValue()}
      </Text>
      <Text size="small" fontWeight="light">{title}</Text>
    </WrapperStyled>

  );
};

export default InfoBox;
