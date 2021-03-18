import styled from 'styled-components'
import Button from 'atoms/Button'
import { MiningInfo } from 'types/app'
import React, { FC } from 'react'
import applyTransparence from 'helpers/transparentize'
import { colorVariables } from 'styles/variables'
import Text from 'atoms/Text/Text'

const BoxStyled = styled.div`
  width: 746px;
  box-sizing: border-box;
  max-width: 746px;
  max-height: 518px;
  padding: 40px 0 50px;
  border: 1px solid ${({ theme }) => theme.colors.gunPowder};
  border-radius: 10px;
  background: ${applyTransparence(0.2, colorVariables.gunPowder)};
  flex-basis: 48%;
`

const TitleStyled = styled.div`
  padding: 0 0 27px 5px;
  margin: 0 0 35px 21px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gunPowder};
`
const InfoContentStyled = styled.div`
  margin: 0 17px 41px 17px;
`

const ParagraphStyled = styled.p`
  margin: 0;
  font-family: Verdana, sans-serif;
  font-size: 0.58rem;
`

const DescriptionStyled = styled(ParagraphStyled)`
  margin-bottom: 65px;
`

const InfoStyled = styled(ParagraphStyled)`
  margin-bottom: 30px;
`

const LinkStyled = styled(ParagraphStyled)`
  color: ${({ theme }) => theme.colors.apple};
  margin-bottom: 43px;
`

const ButtonStyled = styled(Button)`
  padding: 38px 17px 37px 18px;
`
const ButtonContentStyled = styled.div`
  display: flex;
  justify-content: center;
`

interface IProps {
  data: MiningInfo
}

const MinerCard: FC<IProps> = ({ data }) => {
  const { title, description, info, configLink, minerLink } = data

  return (
    <BoxStyled>
      <TitleStyled>
        <Text size="very-large" italic>
          {title}
        </Text>
      </TitleStyled>
      <InfoContentStyled>
        <DescriptionStyled>{description}</DescriptionStyled>
        {info.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <InfoStyled key={index}>{item}</InfoStyled>
        ))}
        <LinkStyled>
          <a href={configLink} target="_blank" rel="noreferrer noopener">
            Download config file
          </a>
        </LinkStyled>
      </InfoContentStyled>
      <ButtonContentStyled>
        <ButtonStyled href={minerLink}>DOWNLOAD MINER</ButtonStyled>
      </ButtonContentStyled>
    </BoxStyled>
  )
}

export default MinerCard
