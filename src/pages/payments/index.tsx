import Background from 'atoms/Background'
import BoxesWrapper from 'atoms/BoxesWrapper/BoxesWrapper'
import ContentTitle from 'atoms/ContentTitle'
import { PaymentsIcon } from 'atoms/icons'
import SearchBar from 'atoms/SearchBar'
import Table from 'components/Table'
import { minWidth } from 'helpers/responsive'
import useGoToWallet from 'hooks/useGoToWallet'
import React, { FC, useState } from 'react'
import { getPaymentsData } from 'services/getPaymentsData'
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
  ${minWidth(
    'desktop',
    css`
      margin: 41px 0 97px;
    `,
  )}
`

export const getServerSideProps = async () => ({
  props: await getPaymentsData(),
})

const PaymentPage: FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
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
          <BoxesWrapper data={props.paymentsInfoBox} />
        </BoxesWrapperStyled>
        <Table
          data={props.paymentTable.data}
          columns={props.paymentTable.columns}
        />
      </ContainerStyled>
    </>
  )
}

export default PaymentPage
