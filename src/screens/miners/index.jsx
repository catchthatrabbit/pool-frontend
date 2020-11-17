import CommonContentTitle from '../../components/common/common-content-title';
import CommonInfoBox from '../../components/common/common-info-box';
import BaseTable from '../../components/base-components/base-table';
import BasePagination from '../../components/base-components/base-pagination';

import { BoxesWrapperStyled } from './style';

const boxesInfo = [
  { title: 'Pool hashrate', value: '69.9 GH/S' },
  { title: '24H Hashrate High', value: '192.9 GH/S' },
  { title: 'Active miners', value: '10,000' },
  { title: 'Last XCB Payout', value: '₡ 330,000' },
];

const MinersPageUi = () => (
  <>
    <CommonContentTitle image="/images/miners.svg">MINERS</CommonContentTitle>
    <BoxesWrapperStyled>
      {boxesInfo.map(({ title, value }) => (
        <li key={title}>
          <CommonInfoBox title={title} value={value} />
        </li>
      ))}
    </BoxesWrapperStyled>
    <BaseTable
      footer={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <BasePagination
          pageCount={20}
          onPageChange={(page) => console.log(page)}
        />
      }
    />
  </>
);

export default MinersPageUi;
