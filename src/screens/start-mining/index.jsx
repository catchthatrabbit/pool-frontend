/* eslint-disable react/jsx-wrap-multilines */
import {
  WrapperStyled,
  TableInfoStyled,
  TextStyled,
  ColStyled,
  RowStyled,
  BoxStyled,
} from './style';
import CommonPageTitle from '../../components/common/common-page-title';
import CommonBox from '../../components/common/common-box';
import CommonInfoTable from '../../components/common/common-info-table';
import CommonTitle from '../../components/common/common-title';

const ContactPageUi = () => (
  <>
    <CommonPageTitle image="/images/minings.svg" title="START MINING" />
    <WrapperStyled>
      <CommonBox
        title="Connect Europe Pool"
        titleColor="green"
        content={
          <TableInfoStyled>
            <CommonInfoTable />
          </TableInfoStyled>
        }
      />
    </WrapperStyled>
    <WrapperStyled>
      <CommonBox
        title="Connect Europe Pool"
        titleColor="green"
        content={
          <TableInfoStyled>
            <CommonInfoTable />
          </TableInfoStyled>
        }
      />
    </WrapperStyled>
    <WrapperStyled>
      <CommonBox
        title="Connect Europe Pool"
        titleColor="green"
        content={
          <TableInfoStyled>
            <CommonInfoTable />
          </TableInfoStyled>
        }
      />
    </WrapperStyled>
    <CommonPageTitle image="/images/minings.svg" title="START GUIDE" />
    <CommonBox>
      <CommonTitle>Step1: Get a Wallet</CommonTitle>
      <TextStyled>
        lorem ipsum text. lorem ipsum text.lorem ipsum textlorem ipsum textlorem
        ipsum text lorem ipsum text lorem ipsum text{' '}
      </TextStyled>

      <CommonTitle>Step2: Get a Wallet</CommonTitle>
      <TextStyled>
        lorem ipsum text. lorem ipsum text.lorem ipsum textlorem ipsum textlorem
        ipsum text lorem ipsum text lorem ipsum text{' '}
      </TextStyled>

      <CommonTitle>Step3: Get a Wallet</CommonTitle>
      <TextStyled>
        lorem ipsum text. lorem ipsum text.lorem ipsum textlorem ipsum textlorem
        ipsum text lorem ipsum text lorem ipsum text{' '}
      </TextStyled>
      <RowStyled>
        <ColStyled>
          <BoxStyled>
            <CommonTitle seperatorColor="white">
              Step1: Get a Wallet
            </CommonTitle>
          </BoxStyled>
        </ColStyled>
        <ColStyled></ColStyled>
      </RowStyled>
    </CommonBox>
  </>
);

export default ContactPageUi;
