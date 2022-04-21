import ReactQueryTable from '@components/ReactQueryTable';
import SelectPool from '@components/SelectPool';
import Background from 'atoms/Background';
import BoxesWrapper from 'atoms/BoxesWrapper/BoxesWrapper';
import ContentTitle from 'atoms/ContentTitle';
import { MinersIcon } from 'atoms/icons';
import SearchBar from 'atoms/SearchBar';
import { minersPageConfig, poolEndpointsConfig } from 'config';
import { minWidth } from 'helpers/responsive';
import useGoToWallet from 'hooks/useGoToWallet';
import React, { useEffect, useState } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { minersService } from 'services';
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
`

export const getServerSideProps = async () => {
  const queryClient = new QueryClient()

  await Promise.allSettled([
    queryClient.prefetchQuery(['miners', poolEndpointsConfig.EU_PRIMARY_API, 1], minersService.getMinersQueryFn),
    queryClient.prefetchQuery([ 'minersInfo', poolEndpointsConfig.EU_PRIMARY_API ], minersService.getMinersInfoQueryFn),
  ])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const MinersPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = () => {
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
        <ContentTitle Image={ <MinersIcon /> }>Miners</ContentTitle>
        <SearchBarContainerStyled>
          <SearchBar
            onChange={ handleSearchValueChange }
            value={ searchValue }
            onSearch={ handleSearch }
          />
        </SearchBarContainerStyled>

        <SelectPool />
        <MinersInfoBoxes />
        <ReactQueryTable
          columns={ minersPageConfig.MINERS_TABLE.columns }
          queryKey={ [ 'miners' ] }
          queryFn={ minersService.getMinersQueryFn }
        />
      </ContainerStyled>
    </>
  )
}

const MinersInfoBoxes = () => {
  const poolEndpoint = usePoolStore(poolEndpointSelector)
  const { data } = useQuery([ 'minersInfo', poolEndpoint ], minersService.getMinersInfoQueryFn)

  return (
    <BoxesWrapperStyled>
      <BoxesWrapper data={data ?? []} />
    </BoxesWrapperStyled>
  )
}


export default MinersPage
