import React, { FC } from 'react'
import styled from 'styled-components'
import InfoBox, { InfoBoxItem } from 'atoms/InfoBox'

const BoxesWrapperStyled = styled.ul`
  display: flex;
  align-self: center;
  flex-direction: column;
  margin: 41px 0 97px;
  padding: 0;
  list-style-type: none;
  flex-flow: row wrap;
  width: 100%;
  li {
    display: flex;
    justify-content: center;
  }
  li:not(:nth-child(4n)) {
    margin-right: 198px;
  }
  li:not(:nth-child(-n + 4)) {
    margin-top: 60px;
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
