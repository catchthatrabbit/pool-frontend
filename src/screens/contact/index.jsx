import { BoxStyled, TextStyled, EmailBoxWrapperStyled } from './style';
import CommonContentTitle from '../../../components/ContentTitle';
import CommonEmailBox from '../../components/common/common-email-box';
import CommonTitle from '../../components/common/common-title';

const ContactPageUi = () => (
  <>
    <CommonContentTitle image="/images/contact-us.svg">
      CONTACT US
    </CommonContentTitle>
    <BoxStyled>
      <CommonTitle>Support</CommonTitle>
      <TextStyled>
        If you have any questions about our pool, you can contact us freely
        through this email.
      </TextStyled>
      <EmailBoxWrapperStyled>
        <CommonEmailBox>support@catchthatrabbit.com</CommonEmailBox>
      </EmailBoxWrapperStyled>
    </BoxStyled>
    <BoxStyled>
      <CommonTitle>Security &amp; Bug reports</CommonTitle>
      <TextStyled>
        Any bug or any other security issues reports are highly and greatly
        appreciated.
      </TextStyled>
      <EmailBoxWrapperStyled>
        <CommonEmailBox>issues@catchthatrabbit.com</CommonEmailBox>
      </EmailBoxWrapperStyled>
    </BoxStyled>
    <BoxStyled>
      <CommonTitle>Legal &amp; Commercial</CommonTitle>
      <TextStyled>
        For legal and commercial questions please feel free to email us.
      </TextStyled>
      <EmailBoxWrapperStyled>
        <CommonEmailBox>office@catchthatrabbit.com</CommonEmailBox>
      </EmailBoxWrapperStyled>
    </BoxStyled>
  </>
);

export default ContactPageUi;
