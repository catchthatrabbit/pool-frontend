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

const BlocksPageUi = () => (
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
        <SearchBar />
      </SearchWrapperStyled>

      <BaseTable />
    </WrapperStyled>
  </>
);

export default BlocksPageUi;
