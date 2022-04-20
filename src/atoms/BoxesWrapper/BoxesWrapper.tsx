import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import InfoBox from 'components/InfoBox'
import { InfoBoxItem } from 'helpers/text'
import { minWidth } from 'helpers/responsive'

const BoxesWrapperStyled = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  width: 100%;
  li {
    display: flex;
    margin-bottom: 60px;
  }
  flex-direction: column;
  align-items: center;
  ${minWidth(
    'tablet',
    css`
      flex-direction: row;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      li:not(:nth-child(4n)) {
        margin-inline: 47.5px;
      }
    `,
  )}
`
interface IProps {
  data: InfoBoxItem[]
}

const BoxesWrapper: FC<IProps> = ({ data }) => (
  <BoxesWrapperStyled>
    {data.map(({ title, value }) => (
      <li key={title}>
        <InfoBox title={title} value={value} />
      </li>
    ))}
  </BoxesWrapperStyled>
)

export default BoxesWrapper
