import React, { FC } from 'react'
import styled from 'styled-components'
import InfoBox from 'atoms/InfoBox'
import { InfoBoxItem } from 'atoms/InfoText'

const BoxesWrapperStyled = styled.ul`
  display: flex;
  align-self: center;
  flex-direction: column;
  margin: 18px 0 97px;
  padding: 0;
  list-style-type: none;
  flex-flow: row wrap;
  width: 100%;
  li {
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }
  li:not(:nth-child(4n)) {
    margin-right: 198px;
  }
`
interface IProps {
  data: InfoBoxItem[]
}

const BoxesWrapper: FC<IProps> = ({ data }) => (
  <BoxesWrapperStyled>
    {data.map(({ title, value, type }) => (
      <li key={title}>
        <InfoBox title={title} value={value} type={type} />
      </li>
    ))}
  </BoxesWrapperStyled>
)

export default BoxesWrapper
