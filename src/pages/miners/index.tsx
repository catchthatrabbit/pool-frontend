import Background from 'atoms/Background'
import BoxesWrapper from 'atoms/BoxesWrapper/BoxesWrapper'
import ContentTitle from 'atoms/ContentTitle'
import { MinersIcon } from 'atoms/icons'
import SearchBar from 'atoms/SearchBar'
import Table from 'components/Table'
import { minWidth } from 'helpers/responsive'
import useGoToWallet from 'hooks/useGoToWallet'
import React, { FC, useState } from 'react'
import { getMinersData } from 'services/getMinersData'
import styled, { css } from 'styled-components'

import type { InferGetServerSidePropsType } from 'next'

const ContainerStyled = styled.div`
  margin: 36px 20px 73px;
  width: auto;
  ${minWidth(
    'tablet',
    css`
      margin: 36px 50px 73px;
    `,
  )}
  ${minWidth(
    'laptopL',
    css`
      margin: 36px 100px 73px;
    `,
  )}
  ${minWidth(
    'desktop',
    css`
      margin: 36px 140px 73px;
    `,
  )}
  z-index: 1;
`
const SearchBarContainerStyled = styled.div`
  margin: 23px auto 45px;
  width: 85%;
  ${minWidth('tablet', css``)}
  ${minWidth(
    'laptop',
    css`
      margin: 43px auto 90px;
    `,
  )}
    ${minWidth(
    'desktop',
    css`
      margin: 83px auto;
    `,
  )}
`
const BoxesWrapperStyled = styled.div`
  margin: 41px 0 41px;
`

export const getServerSideProps = async () => ({
  props: await getMinersData(),
})

const MinersPage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props,
) => {
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
        <ContentTitle Image={<MinersIcon />}>Miners</ContentTitle>
        <SearchBarContainerStyled>
          <SearchBar
            onChange={handleSearchValueChange}
            value={searchValue}
            onSearch={handleSearch}
          />
        </SearchBarContainerStyled>
        <BoxesWrapperStyled>
          <BoxesWrapper data={props.minersInfoBox} />
        </BoxesWrapperStyled>
        <Table
          data={props.minerTable.data}
          columns={props.minerTable.columns}
        />
      </ContainerStyled>
    </>
  )
}

export default MinersPage
