import styled from 'styled-components';
import Button from 'atoms/Button';
import { MiningInfo } from 'types/app';
import React, { FC } from 'react';
import applyTransparence from 'helpers/transparentize';
import { colorVariables } from 'styles/variables';
import Text from 'atoms/Text/Text';

const StyledBox = styled.div`
  width: 746px;
  box-sizing: border-box;
  max-width: 746px;
  max-height: 518px;
  padding: 40px 0 50px;
  border: 1px solid ${({ theme }) => theme.colors.gunPowder};
  border-radius: 10px;
  background: ${applyTransparence(0.2, colorVariables.gunPowder)};

  @media only screen and (min-width: 768px) {
    flex-basis: 48%;
  }
`;

const StyledTitle = styled.div`
  padding: 0 0 27px 5px;
  margin: 0 0 35px 21px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gunPowder};
`;
const StyledInfoContent = styled.div`
  margin: 0 17px 41px 17px;
`;

const StyledParagraph = styled.p`
  margin: 0;
  font-family: Verdana, sans-serif;
  font-size: 0.58rem;
`;

const StyledDescription = styled(StyledParagraph)`
  margin-bottom: 65px;
`;

const StyledInfo = styled(StyledParagraph)`
  margin-bottom: 30px;
`;

const StyledLink = styled(StyledParagraph)`
  color: ${({ theme }) => theme.colors.apple};
  margin-bottom: 43px
`;

const StyledButton = styled(Button)`
  padding: 38px 17px 37px 18px;
`;
const StyledButtonContent = styled.div`
  display: flex;
  justify-content: center;
`;

interface IProps {
  data: MiningInfo
}

const MinerCard: FC<IProps> = ({ data }) => {
  const { title, description, info, configLink, minerLink } = data;

  return (
    <StyledBox>
      <StyledTitle><Text size="very-large" italic>{title}</Text></StyledTitle>
      <StyledInfoContent>
        <StyledDescription>{description}</StyledDescription>
        {info.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <StyledInfo key={index}>{item}</StyledInfo>
        ))}
        <StyledLink>
          <a href={configLink} target="_blank" rel="noreferrer noopener">
            Download config file
          </a>
        </StyledLink>
      </StyledInfoContent>
      <StyledButtonContent>
        <StyledButton href={minerLink}>DOWNLOAD MINER</StyledButton>
      </StyledButtonContent>
    </StyledBox>
  );
};

export default MinerCard;
