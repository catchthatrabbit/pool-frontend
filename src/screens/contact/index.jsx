import { WrapperStyled, EmailBoxWrapperStyled } from './style';
import CommonPageTitle from '../../components/common/common-page-title';
import CommonBox from '../../components/common/common-box';
import CommonEmailBox from '../../components/common/common-email-box';
import CommonTitle from '../../components/common/common-title';

const ContactPageUi = () => (
  <>
    <CommonPageTitle image="/images/contact.svg" title="CONTACT US" />
    <WrapperStyled>
      <CommonBox>
        <CommonTitle>Support</CommonTitle>
        <p>
          If you have any questions about our pool, you can contact us freely
          through this email.
        </p>
        <EmailBoxWrapperStyled>
          <CommonEmailBox>Support@catchthatrabbit.com</CommonEmailBox>
        </EmailBoxWrapperStyled>
      </CommonBox>
    </WrapperStyled>
    <WrapperStyled>
      <CommonBox>
        <CommonTitle>Security & Bug reports</CommonTitle>
        <p>
          If you have any questions about our pool, you can contact us freely
          through this email.
        </p>
        <EmailBoxWrapperStyled>
          <CommonEmailBox>Support@catchthatrabbit.com</CommonEmailBox>
        </EmailBoxWrapperStyled>
      </CommonBox>
    </WrapperStyled>
    <WrapperStyled>
      <CommonBox>
        <CommonTitle>Legal & Commercial</CommonTitle>

        <p>For legal and commercial questions please feel free to email us.</p>
        <EmailBoxWrapperStyled>
          <CommonEmailBox>office@catchthatrabbit.com</CommonEmailBox>
        </EmailBoxWrapperStyled>
      </CommonBox>
    </WrapperStyled>
  </>
);

export default ContactPageUi;
