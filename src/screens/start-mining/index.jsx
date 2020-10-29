/* eslint-disable react/jsx-wrap-multilines */
import {
  WrapperStyled,
  TableInfoStyled,
  TextStyled,
  ColStyled,
  RowStyled,
  ServerButtonStyled,
} from './style';
import CommonPageTitle from '../../components/common/common-page-title';
import CommonBox from '../../components/common/common-box';
import CommonInfoTable from '../../components/common/common-info-table';
import CommonTitle from '../../components/common/common-title';
import SearchBar from '../../../components/SearchBar';
import BaseMargin from '../../components/base-components/base-margin';

const ContactPageUi = () => (
  <>
    <BaseMargin y="3rem">
      <CommonPageTitle image="/images/minings.svg" title="START MINING" />
    </BaseMargin>

    <WrapperStyled>
      <CommonBox>
        <CommonTitle titleColor="green">Connect Europe Pool</CommonTitle>
        <TableInfoStyled>
          <CommonInfoTable />
        </TableInfoStyled>
      </CommonBox>
    </WrapperStyled>
    <WrapperStyled>
      <CommonBox>
        <CommonTitle titleColor="green">Connect Europe Pool</CommonTitle>
        <TableInfoStyled>
          <CommonInfoTable />
        </TableInfoStyled>
      </CommonBox>
    </WrapperStyled>
    <WrapperStyled>
      <CommonBox>
        <CommonTitle titleColor="green">Connect Europe Pool</CommonTitle>
        <TableInfoStyled>
          <CommonInfoTable />
        </TableInfoStyled>
      </CommonBox>
    </WrapperStyled>
    <BaseMargin y="3rem">
      <CommonPageTitle image="/images/minings.svg" title="START GUIDE" />
    </BaseMargin>

    <CommonBox>
      <CommonTitle>Step1: Get a Wallet</CommonTitle>
      <TextStyled>
        lorem ipsum text. lorem ipsum text.lorem ipsum textlorem ipsum textlorem
        ipsum text lorem ipsum text lorem ipsum text{' '}
      </TextStyled>

      <CommonTitle>Step2: Download mining software</CommonTitle>
      <TextStyled>
        lorem ipsum text. lorem ipsum text.lorem ipsum textlorem ipsum textlorem
        ipsum text lorem ipsum text lorem ipsum text{' '}
      </TextStyled>

      <CommonTitle>Step3: Choose your server</CommonTitle>
      <TextStyled>
        lorem ipsum text. lorem ipsum text.lorem ipsum textlorem ipsum textlorem
        ipsum text lorem ipsum text lorem ipsum text{' '}
      </TextStyled>
      <RowStyled>
        <ColStyled>
          <ServerButtonStyled>Europe</ServerButtonStyled>
        </ColStyled>
        <ColStyled>
          <ServerButtonStyled>United States</ServerButtonStyled>
        </ColStyled>
        <ColStyled>
          <ServerButtonStyled>Asia</ServerButtonStyled>
        </ColStyled>
      </RowStyled>

      <CommonTitle>Step4: Go To Dashboard</CommonTitle>
      <TextStyled>
        lorem ipsum text. lorem ipsum text.lorem ipsum textlorem ipsum textlorem
        ipsum text lorem ipsum text lorem ipsum text{' '}
      </TextStyled>
      <SearchBar />
      <CommonBox>
        <TableInfoStyled>
          <CommonInfoTable />
        </TableInfoStyled>
      </CommonBox>
    </CommonBox>
  </>
);

export default ContactPageUi;
