import React, { FC } from 'react';
import styled from 'styled-components';
import InfoTable, { InfoTableItem, WidthStyle } from 'atoms/InfoTable/InfoTable';
import { colorVariables } from 'styles/variables';
import Text, { TextColor } from 'atoms/Text/Text';

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gunPowder};
  border-radius: 10px;
`;

const TitleContainer = styled.div`
  margin: 0 47px;
  padding: 50px 0 25px 0;
  border-bottom: 1px solid ${colorVariables.gunPowder};
`

const TableContainer = styled.div`
  margin: 16px 0;
`;

interface IProps {
  data: InfoTableItem[],
  title: string,
  width: WidthStyle,
  color: TextColor,
}

const MiningInfo: FC<IProps> = ({ data, title, width = 'large', color = 'apple' }) => (
  <Container>
    <TitleContainer>
      <Text size='very-large' color={color}>{title}</Text>
    </TitleContainer>
    <TableContainer>
      <InfoTable data={data} width={width} />
    </TableContainer>
  </Container>
);

export default MiningInfo;
