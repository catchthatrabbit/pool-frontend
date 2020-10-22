import BaseTable from '../../components/base-components/base-table';
import InfoBox from '../../../components/InfoBox';
import { ColStyled, RowStyled, WrapperStyled } from './style';
import CommonPageTitle from '../../components/common/common-page-title';

const MinersPageUi = () => (
  <>
    <CommonPageTitle title="MINERS" image="/images/miners.svg" />
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

      <BaseTable />
    </WrapperStyled>
  </>
);

export default MinersPageUi;
