import styled from 'styled-components';
import Button from 'atoms/Button';
import { MiningInfo } from 'types/app';
import React, { FC } from 'react';
import applyTransparence from 'helpers/transparentize';
import { colorVariables } from 'styles/variables';

const StyledBox = styled.div`
  box-sizing: border-box;
  max-width: 746px;
  max-height: 518px;
  padding: 45px 20px 50px;
  border: 1px solid ${({ theme }) => theme.colors.gunPowder};
  border-radius: 10px;
  background: ${applyTransparence(0.2, colorVariables.gunPowder )};

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

interface IProps {
  data: MiningInfo
}

const MinerCard: FC<IProps> = ({ data }) => {
  const { title, description, info, configLink, minerLink } = data;

  return (
    <StyledBox>
      <StyledTitle>{title}</StyledTitle>
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
      <StyledButton href={minerLink}>DOWNLOAD MINER</StyledButton>
    </StyledBox>
  );
};

export default MinerCard;
