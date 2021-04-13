import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import InfoTable, { InfoTableItem, WidthStyle } from 'atoms/InfoTable/InfoTable'
import { colorVariables } from 'styles/variables'
import Text, { TextColor } from 'atoms/Text/Text'
import { minWidth } from 'helpers/responsive'

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gunPowder};
  border-radius: 10px;
  overflow: scroll;
  overflow-y: hidden;
  ${minWidth(
    'tablet',
    css`
      overflow: hidden;
    `,
  )}
`

const TitleContainer = styled.div`
  border-bottom: 1px solid ${colorVariables.gunPowder};
  margin: 0 27px;
  padding: 30px 0 15px 0;
  ${minWidth(
    'tablet',
    css`
      margin: 0 47px;
      padding: 50px 0 25px 0;
    `,
  )}
  ${minWidth('laptopL', css``)}
    ${minWidth('desktop', css``)}
`

const TableContainer = styled.div`
  margin: 16px 0;
`

interface IProps {
  data: InfoTableItem[]
  title: string
  width: WidthStyle
  color: TextColor
}

const MiningInfo: FC<IProps> = ({
  data,
  title,
  width = 'large',
  color = 'apple',
}) => (
  <Container>
    <TitleContainer>
      <Text size="very-large" color={color}>
        {title}
      </Text>
    </TitleContainer>
    <TableContainer>
      <InfoTable data={data} width={width} />
    </TableContainer>
  </Container>
)

export default MiningInfo
