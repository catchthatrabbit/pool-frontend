import Text from 'atoms/Text/Text';
import { minWidth } from 'helpers/responsive';
import styled, { css } from 'styled-components';

import type { InfoBoxItemProps } from 'helpers/text'

const WrapperStyled = styled.div`
  height: 70px;
  width: 200px;
  padding: 15px 0 20px;
  margin: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.spindle};
  border-radius: 10px;
  ${minWidth(
    'laptopL',
    css`
      height: 88px;
      width: 260px;
    `,
  )}
`

const InfoBox = ({ value, title }: InfoBoxItemProps) => (
  <WrapperStyled>
    <Text size="large" fontWeight="bold">
      {value.prefix}
      {value.text}
      {value.suffix}
    </Text>
    <Text size="small" fontWeight="light">
      {title}
    </Text>
  </WrapperStyled>
)

export default InfoBox
