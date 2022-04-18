import ReactQueryTable from '@components/ReactQueryTable';
import SelectPool from '@components/SelectPool';
import Background from 'atoms/Background';
import BoxesWrapper from 'atoms/BoxesWrapper/BoxesWrapper';
import ContentTitle from 'atoms/ContentTitle';
import { PaymentsIcon } from 'atoms/icons';
import SearchBar from 'atoms/SearchBar';
import { EU_PRIMARY_API_ENDPOINT } from 'config';
import { minWidth } from 'helpers/responsive';
import useGoToWallet from 'hooks/useGoToWallet';
import { useEffect, useState } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { paymentsService } from 'services';
import { PAYMENT_TABLE_COLUMNS } from 'services/getPaymentsData';
import { poolEndpointSelector, resetPoolSelector, usePoolStore } from 'store/pool.store';
import styled, { css } from 'styled-components';

import type { InferGetServerSidePropsType, NextPage } from 'next'

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

export const getServerSideProps = async (ctx) => {
  const queryClient = new QueryClient()

  await Promise.allSettled([
    queryClient.prefetchQuery(['payments', EU_PRIMARY_API_ENDPOINT, 1], paymentsService.getPaymentsQueryFn),
    queryClient.prefetchQuery([ 'paymentsInfo', EU_PRIMARY_API_ENDPOINT ], paymentsService.getPaymentsInfoQueryFn),
  ])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const PaymentPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = () => {
  const [searchValue, setValue] = useState('')

  const handleSearchValueChange = (event) => setValue(event.target.value)
  const goToWallet = useGoToWallet()
  const handleSearch = () => {
    goToWallet(searchValue)
  }
  const resetPool = usePoolStore(resetPoolSelector)
  useEffect(resetPool, [])

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

        <SelectPool />
        <PaymentsInfoBoxes />
        <ReactQueryTable
          columns={ PAYMENT_TABLE_COLUMNS }
          queryKey={['payments']}
          queryFn={paymentsService.getPaymentsQueryFn}
        />
      </ContainerStyled>
    </>
  )
}

const PaymentsInfoBoxes = () => {
  const poolEndpoint = usePoolStore(poolEndpointSelector)
  const { data } = useQuery([ 'paymentsInfo', poolEndpoint ], paymentsService.getPaymentsInfoQueryFn)

  return (
    <BoxesWrapperStyled>
      <BoxesWrapper data={data ?? []} />
    </BoxesWrapperStyled>
  )
}

export default PaymentPage


