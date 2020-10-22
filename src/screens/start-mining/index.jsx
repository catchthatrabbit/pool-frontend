import { WrapperStyled, EmailBoxWrapperStyled } from './style';
import CommonPageTitle from '../../components/common/common-page-title';
import CommonBox from '../../components/common/common-box';
import BaseTable from '../../components/base-components/base-table';

const ContactPageUi = () => (
  <>
    <CommonPageTitle image="/images/minings.svg" title="START MINING" />
    <WrapperStyled>
      <CommonBox
        title="Connect Europe Pool"
        titleColor="green"
        content={(
          <>
            <BaseTable twoColumn />
          </>
        )}
      />
    </WrapperStyled>
    <WrapperStyled>
      <CommonBox
        title="Connect Europe Pool"
        titleColor="green"
        content={(
          <>
            <BaseTable twoColumn />
          </>
        )}
      />
    </WrapperStyled>
    <WrapperStyled>
      <CommonBox
        title="Connect Europe Pool"
        titleColor="green"
        content={(
          <>
            <BaseTable twoColumn />
          </>
        )}
      />
    </WrapperStyled>
  </>
);

export default ContactPageUi;
