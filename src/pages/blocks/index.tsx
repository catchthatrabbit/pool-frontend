import React, { FC, useState } from 'react'

import ContentTitle from 'atoms/ContentTitle'
import InfoBox from 'atoms/InfoBox/InfoBox'
import SearchBar from 'atoms/SearchBar'
import Table from 'components/Table'
import { BlockerLogoIcon } from 'atoms/icons'
import { TableData, BlocksInfoBoxData } from 'mockData/homePageData'
import styled from 'styled-components'
import Background from 'atoms/Background'

const StyledBoxesWrapper = styled.ul`
  display: flex;
  align-self: center;
  flex-direction: column;
  margin: 18px 0 0;
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
  @media screen and (min-width: ${({ theme }) =>
      theme.responsive.mobileDevice.medium}) {
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-evenly;
    li {
      margin-top: 50px;
    }
  }
  @media screen and (min-width: ${({ theme }) =>
      theme.responsive.mobileDevice.large}) {
    justify-content: space-between;
  }
`
const StyledContainer = styled.div`
  margin: 60px 140px 73px;
`
const StyledSearchBarContainer = styled.div`
  margin: 83px 140px;
  width: 1363px;
`

const BlocksPage: FC = () => {
  const [searchValue, setValue] = useState('')

  const handleSearchValueChange = (event) => setValue(event.target.value)

  return (
    <>
      <Background />
      <StyledContainer>
        <ContentTitle Image={<BlockerLogoIcon />}>POOL BLOCKS</ContentTitle>
        <StyledBoxesWrapper>
          {BlocksInfoBoxData.map(({ title, value, type }) => (
            <li key={title}>
              <InfoBox title={title} value={value} type={type} />
            </li>
          ))}
        </StyledBoxesWrapper>
        <StyledSearchBarContainer>
          <SearchBar onChange={handleSearchValueChange} value={searchValue} />
        </StyledSearchBarContainer>

        <Table data={TableData.data} columns={TableData.columns} />
      </StyledContainer>
    </>
  )
}

export default BlocksPage
