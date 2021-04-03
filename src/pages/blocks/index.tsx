import React, { FC, useState } from 'react'

import ContentTitle from 'atoms/ContentTitle'
import SearchBar from 'atoms/SearchBar'
import Table from 'components/Table'
import { BlockerLogoIcon } from 'atoms/icons'
import { TableData, BlocksInfoBoxData } from 'mockData/homePageData'
import styled from 'styled-components'
import Background from 'atoms/Background'
import BoxesWrapper from 'atoms/BoxesWrapper/BoxesWrapper'
import { useRouter } from 'next/router'

const ContainerStyled = styled.div`
  margin: 60px 140px 73px;
  z-index: 1;
`
const SearchBarContainerStyled = styled.div`
  margin: 83px 140px;
  width: 1363px;
`

const BlocksPage: FC = () => {
  const [searchValue, setValue] = useState('')

  const handleSearchValueChange = (event) => setValue(event.target.value)
  const router = useRouter()
  const handleSearch = () => {
    router.push({
      pathname: `/wallet/${searchValue}`,
    })
    console.log(`Searching for: ${searchValue}`)
  }

  return (
    <>
      <Background />
      <ContainerStyled>
        <ContentTitle Image={<BlockerLogoIcon />}>POOL BLOCKS</ContentTitle>
        <BoxesWrapper data={BlocksInfoBoxData} />
        <SearchBarContainerStyled>
          <SearchBar
            onChange={handleSearchValueChange}
            value={searchValue}
            onSearch={handleSearch}
          />
        </SearchBarContainerStyled>

        <Table data={TableData.data} columns={TableData.columns} />
      </ContainerStyled>
    </>
  )
}

export default BlocksPage
