import styled from 'styled-components';
import Button from '../../../atoms/Button';

const StyledBox = styled.div`
  box-sizing: border-box;
  flex-basis: 100%;
  margin-bottom: 20px;
  padding: 45px 20px 50px;
  border: 1px solid ${({ theme }) => theme.colors.gunPowder};
  border-radius: 10px;
  background: rgba(
    ${({ theme }) => theme.colors.getRGBValue(theme.colors.gunPowder)},
    0.2
  );
  @media only screen and (min-width: 768px) {
    flex-basis: 48%;
  }
`;

const StyledTitle = styled.h4`
  font-size: 1rem;
  padding: 0 0 25px 0;
  margin: 0 0 35px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gunPowder};
`;

const StyledParagraph = styled.p`
  margin: 0;
  font-family: Verdana, sans-serif;
  font-size: 0.58rem;
`;

const StyledDescription = styled(StyledParagraph)`
  margin-bottom: 30px;
`;

const StyledInfo = styled(StyledParagraph)`
  margin-bottom: 20px;
`;

const StyledLink = styled(StyledParagraph)`
  color: ${({ theme }) => theme.colors.apple};
`;

const StyledButton = styled(Button)`
  display: block;
  width: 100%;
  min-width: 185px;
  max-width: 215px;
  margin: 50px auto 0;
`;

export {
  StyledBox,
  StyledTitle,
  StyledInfo,
  StyledDescription,
  StyledLink,
  StyledButton,
};
