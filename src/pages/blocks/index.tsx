import React, { FC, useState } from 'react'

import CommonContentTitle from 'atoms/ContentTitle'
import CommonInfoBox from 'atoms/InfoBox/InfoBox'
import SearchBar from 'atoms/SearchBar'
import BaseTable from 'components/Table'
import { BlockerLogoIcon } from '../../atoms/icons'
import { TableData, BlocksInfoBoxData } from '../../mockData/homePageData'
import styled from 'styled-components'

const BoxesWrapperStyled = styled.ul`
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

  // const renderTableFooter = () => (
  //   <Pagination pageCount={20} onPageChange={(page) => console.log(page)} />
  // )

  const handleSearchValueChange = (event) => setValue(event.target.value)

  return (
    <StyledContainer>
      <CommonContentTitle Image={<BlockerLogoIcon />}>
        POOL BLOCKS
      </CommonContentTitle>
      <BoxesWrapperStyled>
        {BlocksInfoBoxData.map(({ title, value, type }) => (
          <li key={title}>
            <CommonInfoBox title={title} value={value} type={type} />
          </li>
        ))}
      </BoxesWrapperStyled>
      <StyledSearchBarContainer>
        <SearchBar onChange={handleSearchValueChange} value={searchValue} />
      </StyledSearchBarContainer>

      <BaseTable data={TableData.data} columns={TableData.columns} />
    </StyledContainer>
  )
}

export default BlocksPage
