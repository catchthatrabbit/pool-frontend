import { useState } from 'react';

import BaseTable from '../../components/base-components/base-table';
import InfoBox from '../../../components/InfoBox';
import {
  ColStyled,
  RowStyled,
  WrapperStyled,
  SearchWrapperStyled,
} from './style';
import CommonPageTitle from '../../components/common/common-page-title';
import SearchBar from '../../../components/SearchBar';
import BasePagination from '../../components/base-components/base-pagination';

const BlocksPageUi = () => {
  const [value, setValue] = useState('');
  const renderTabledFooter = () => (
    <BasePagination onPageChange={(page) => console.log(page)} />
  );
  return (
    <>
      <CommonPageTitle image="/images/blocker-logo.svg" title="BLOCK POOLS" />
      <WrapperStyled>
        <RowStyled>
          <ColStyled>
            <InfoBox title="'Pool hashrate" value="69.9 GH/S" />
          </ColStyled>
          <ColStyled>
            <InfoBox title="'Pool hashrate" value="69.9 GH/S" />
          </ColStyled>
          <ColStyled>
            <InfoBox title="'Pool hashrate" value="69.9 GH/S" />
          </ColStyled>
          <ColStyled>
            <InfoBox title="'Pool hashrate" value="69.9 GH/S" />
          </ColStyled>
        </RowStyled>
        <RowStyled>
          <ColStyled>
            <InfoBox title="'Pool hashrate" value="69.9 GH/S" />
          </ColStyled>
          <ColStyled>
            <InfoBox title="'Pool hashrate" value="69.9 GH/S" />
          </ColStyled>
          <ColStyled>
            <InfoBox title="'Pool hashrate" value="69.9 GH/S" />
          </ColStyled>
          <ColStyled>
            <InfoBox title="'Pool hashrate" value="69.9 GH/S" />
          </ColStyled>
        </RowStyled>
        <SearchWrapperStyled>
          <SearchBar
            onChange={(inputValue) => setValue(inputValue)}
            value={value}
          />
        </SearchWrapperStyled>

        <BaseTable footer={renderTabledFooter()} hightLightColIds={['address']} />
      </WrapperStyled>
    </>
  );
};

export default BlocksPageUi;
