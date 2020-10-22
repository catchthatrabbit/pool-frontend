import { WrapperStyled, EmailBoxWrapperStyled } from './style';
import CommonPageTitle from '../../components/common/common-page-title';
import CommonBox from '../../components/common/common-box';
import CommonEmailBox from '../../components/common/common-email-box';

const ContactPageUi = () => (
  <>
    <CommonPageTitle image="/images/blocker-logo.svg" title="BLOCK POOLS" />
    <WrapperStyled>
      <CommonBox
        title="Support"
        content={
          <>
            <p>
              If you have any questions about our pool, you can contact us
              freely through this email.
            </p>
            <EmailBoxWrapperStyled>
              <CommonEmailBox>Support@catchthatrabbit.com</CommonEmailBox>
            </EmailBoxWrapperStyled>
          </>
        }
      />
    </WrapperStyled>
    <WrapperStyled>
      <CommonBox
        title="Support"
        content={
          <>
            <p>
              If you have any questions about our pool, you can contact us
              freely through this email.
            </p>
            <EmailBoxWrapperStyled>
              <CommonEmailBox>Support@catchthatrabbit.com</CommonEmailBox>
            </EmailBoxWrapperStyled>
          </>
        }
      />
    </WrapperStyled>
    <WrapperStyled>
      <CommonBox
        title="Support"
        content={
          <>
            <p>
              If you have any questions about our pool, you can contact us
              freely through this email.
            </p>
            <EmailBoxWrapperStyled>
              <CommonEmailBox>Support@catchthatrabbit.com</CommonEmailBox>
            </EmailBoxWrapperStyled>
          </>
        }
      />
    </WrapperStyled>
  </>
);

export default ContactPageUi;
