import React, { FC, useState } from 'react'

import ContentTitle from 'atoms/ContentTitle'
import SearchBar from 'atoms/SearchBar'
import Table from 'components/Table'
import { BlockerLogoIcon } from 'atoms/icons'
import { TableData, BlocksInfoBoxData } from 'mockData/homePageData'
import styled, { css } from 'styled-components'
import Background from 'atoms/Background'
import BoxesWrapper from 'atoms/BoxesWrapper/BoxesWrapper'
import useGoToWallet from 'hooks/useGoToWallet'
import { minWidth } from 'helpers/responsive'

const ContainerStyled = styled.div`
  z-index: 1;
  margin: 36px 10px 73px;
  ${minWidth(
    'tablet',
    css`
      margin: 36px 70px 73px;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      margin: 36px 140px 73px;
    `,
  )}
`
const SearchBarContainerStyled = styled.div`
  ${minWidth(
    'mobileL',
    css`
      margin: 53px auto;
      width: 253px;
    `,
  )}
  ${minWidth(
    'tablet',
    css`
      margin: 83px auto;
      width: 553px;
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      width: 85%;
    `,
  )}
`
const BoxesWrapperStyled = styled.div`
  margin: 41px 0 97px;
`

const BlocksPage: FC = () => {
  const [searchValue, setValue] = useState('')

  const handleSearchValueChange = (event) => setValue(event.target.value)
  const goToWallet = useGoToWallet()
  const handleSearch = () => {
    goToWallet(searchValue)
  }

  return (
    <>
      <Background />
      <ContainerStyled>
        <ContentTitle Image={<BlockerLogoIcon />}>POOL BLOCKS</ContentTitle>
        <BoxesWrapperStyled>
          <BoxesWrapper data={BlocksInfoBoxData} />
        </BoxesWrapperStyled>
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
