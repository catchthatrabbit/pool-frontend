import React, { FC, useState } from 'react'
import Table from 'components/Table'
import SearchBar from 'atoms/SearchBar'
import ContentTitle from 'atoms/ContentTitle'
import { PaymentsInfoBoxData, TablePaymentsData } from 'mockData/homePageData'
import { PaymentsIcon } from 'atoms/icons'
import styled, { css } from 'styled-components'
import Background from 'atoms/Background'
import BoxesWrapper from 'atoms/BoxesWrapper/BoxesWrapper'
import useGoToWallet from 'hooks/useGoToWallet'
import { minWidth } from 'helpers/responsive'

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
  ${minWidth(
    'desktop',
    css`
      margin: 41px 0 97px;
    `,
  )}
`

const PaymentPage: FC = () => {
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
        <ContentTitle Image={<PaymentsIcon />}>Payments</ContentTitle>
        <SearchBarContainerStyled>
          <SearchBar
            onChange={handleSearchValueChange}
            value={searchValue}
            onSearch={handleSearch}
          />
        </SearchBarContainerStyled>
        <BoxesWrapperStyled>
          <BoxesWrapper data={PaymentsInfoBoxData} />
        </BoxesWrapperStyled>
        <Table data={TablePaymentsData.data} columns={TablePaymentsData.columns} />
      </ContainerStyled>
    </>
  )
}

export default PaymentPage
