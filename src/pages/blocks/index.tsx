import React, { FC, useState } from 'react'

import ContentTitle from 'atoms/ContentTitle'
import InfoBox from 'atoms/InfoBox/InfoBox'
import SearchBar from 'atoms/SearchBar'
import Table from 'components/Table'
import { BlockerLogoIcon } from 'atoms/icons'
import { TableData, BlocksInfoBoxData } from 'mockData/homePageData'
import styled from 'styled-components'
import Background from 'atoms/Background'
import BoxesWrapper from 'atoms/BoxesWrapper/BoxesWrapper'

const StyledContainer = styled.div`
  margin: 60px 140px 73px;
  z-index: 0;
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
        <BoxesWrapper data={BlocksInfoBoxData} />
        <StyledSearchBarContainer>
          <SearchBar onChange={handleSearchValueChange} value={searchValue} />
        </StyledSearchBarContainer>

        <Table data={TableData.data} columns={TableData.columns} />
      </StyledContainer>
    </>
  )
}

export default BlocksPage
