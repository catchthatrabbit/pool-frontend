import { WrapperStyled, EmailBoxWrapperStyled } from './style';
import CommonPageTitle from '../../components/common/common-page-title';
import CommonBox from '../../components/common/common-box';
import CommonEmailBox from '../../components/common/common-email-box';

const ContactPageUi = () => (
  <>
    <CommonPageTitle image="/images/contact.svg" title="CONTACT US" />
    <WrapperStyled>
      <CommonBox
        title="Support"
        content={(
          <>
            <p>
              If you have any questions about our pool, you can contact us
              freely through this email.
            </p>
            <EmailBoxWrapperStyled>
              <CommonEmailBox>Support@catchthatrabbit.com</CommonEmailBox>
            </EmailBoxWrapperStyled>
          </>
        )}
      />
    </WrapperStyled>
    <WrapperStyled>
      <CommonBox
        title="Security & Bug reports"
        content={(
          <>
            <p>
              Any bug or any other security issues reports are highly and greatly appreciated.
            </p>
            <EmailBoxWrapperStyled>
              <CommonEmailBox>issues@catchthatrabbit.com</CommonEmailBox>
            </EmailBoxWrapperStyled>
          </>
        )}
      />
    </WrapperStyled>
    <WrapperStyled>
      <CommonBox
        title="Legal & Commercial"
        content={(
          <>
            <p>
              For legal and commercial questions please feel free to email us.
            </p>
            <EmailBoxWrapperStyled>
              <CommonEmailBox>office@catchthatrabbit.com</CommonEmailBox>
            </EmailBoxWrapperStyled>
          </>
        )}
      />
    </WrapperStyled>
  </>
);

export default ContactPageUi;
