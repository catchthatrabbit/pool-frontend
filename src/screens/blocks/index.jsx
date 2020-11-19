import { useState } from 'react';

import { BoxesWrapperStyled } from './style';
import CommonContentTitle from '../../components/common/common-content-title';
import CommonInfoBox from '../../components/common/common-info-box';
import SearchBar from '../../../components/SearchBar';
import BasePagination from '../../components/base-components/base-pagination';
import BaseTable from '../../components/base-components/base-table';

const boxesInfo = [
  { title: 'Pool hashrate', value: '69.9 GH/S' },
  { title: 'Network hashrate', value: '192.9 TH/S' },
  { title: 'Network difficulty', value: '6.6 GH' },
  { title: 'Active miners', value: '10,000' },
  { title: '24H Hashrate High', value: '192.9 GH/S' },
  { title: '24H Hashrate Low', value: '19.2 TH/S' },
  { title: 'Round Variance', value: '200%' },
  { title: 'Blockchain Height', value: '99,000,000' },
  { title: 'Last XCB Payout', value: '₡ 330,000' },
];

const BlocksPageUi = () => {
  const [seaarchValue, setValue] = useState('');

  const renderTableFooter = () => (
    <BasePagination pageCount={20} onPageChange={(page) => console.log(page)} />
  );

  const handleSearchValueChange = (event) => setValue(event.target.value);

  return (
    <>
      <CommonContentTitle image="/images/blocker-logo.svg">
        POOL BLOCKS
      </CommonContentTitle>
      <BoxesWrapperStyled>
        {boxesInfo.map(({ title, value }) => (
          <li key={title}>
            <CommonInfoBox title={title} value={value} />
          </li>
        ))}
      </BoxesWrapperStyled>
      <SearchBar onChange={handleSearchValueChange} value={seaarchValue} />

      <BaseTable footer={renderTableFooter()} />
    </>
  );
};

export default BlocksPageUi;
