import Loading from '@components/Loading';
import Table from '@components/Table';
import { useEffect, useState } from 'react';
import { QueryFunction, useQuery } from 'react-query';
import { poolEndpointSelector, usePoolStore } from 'store/pool.store';

export type Column = {
  name: string
  id: string
  type: 'address' | 'block' | 'tx' | 'xcb' | 'number' | 'time' | 'ago' | 'percentage' | 'hashrate' | 'status' | 'string'
}

interface IReactQueryTableProps {
  columns: Column[]
  queryKey: (string | number | undefined)[]
  queryFn: QueryFunction<{ items: any[], pages: number, status?: number }, any>
}


const ReactQueryTable = ({ columns, queryKey, queryFn }: IReactQueryTableProps) => {
  const poolEndpoint = usePoolStore(poolEndpointSelector)
  const [ currentPage, setCurrentPage ] = useState(1)
  const { isLoading, data } = useQuery([ ...queryKey, poolEndpoint, currentPage ], queryFn)

  useEffect(() => setCurrentPage(1), [ poolEndpoint ])

  return (
    <>
      { isLoading && <Loading /> }

      { !isLoading &&
        <Table
          columns={ columns }
          data={ data?.items }
          pages={ data?.pages }
          page={ currentPage }
          onPageChange={ (page: number) => setCurrentPage(page) }
        />
      }
    </>
  )
}

export default ReactQueryTable
