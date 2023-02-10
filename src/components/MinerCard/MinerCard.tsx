import styled, { css } from 'styled-components'
import Button from 'atoms/Button'
import { MiningInfo } from 'types/app'
import applyTransparence from 'helpers/transparentize'
import { colorVariables } from 'styles/variables'
import Text from 'atoms/Text/Text'
import { minWidth } from 'helpers/responsive'

const BoxStyled = styled.div`
  box-sizing: border-box;
  max-width: 746px;
  max-height: 518px;
  padding: 40px 0 50px;
  border: 1px solid ${({ theme }) => theme.colors.gunPowder};
  border-radius: 10px;
  background: ${applyTransparence(0.2, colorVariables.gunPowder)};
  flex-basis: 48%;
  ${minWidth(
    'tablet',
    css`
      width: 500px;
    `,
  )}
  ${minWidth(
    'laptop',
    css`
      width: 746px;
    `,
  )}
    ${minWidth(
    'laptopL',
    css`
      width: 100%;
    `,
  )}
    ${minWidth(
    'desktop',
    css`
      width: 746px;
    `,
  )}
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
  font-size: 1em;
`

const DescriptionStyled = styled(ParagraphStyled)`
  margin-bottom: 1.5em;
`

const InfoStyled = styled(ParagraphStyled)`
  margin-bottom: 0.6em;
`

const LinkStyled = styled(ParagraphStyled)`
  color: ${({ theme }) => theme.colors.apple};
  margin-bottom: 43px;
`

const InputStyled = styled.input`
  color: ${colorVariables.apple};
  font-size: 1.2em;
  width: calc(100% - 17px);
  border: 1px solid ${colorVariables.gunPowder};
  background-color: ${colorVariables.woodsmoke};
  border-radius: 3px;
  padding: 0.3em;
  border-radius: 3px;
`

const ButtonStyled = styled(Button)`
  padding: 38px 17px 37px 18px;
`
const ButtonContentStyled = styled.div`
  display: flex;
  justify-content: center;
`

interface IMinerCardProps {
  data: MiningInfo
}

const MinerCard = ({ data }: IMinerCardProps) => {
  const { title, description, info, command, minerLink } = data

  return (
    <BoxStyled>
      <TitleStyled>
        <Text size="very-large">
          {title}
        </Text>
      </TitleStyled>
      <InfoContentStyled>
        <DescriptionStyled>{description}</DescriptionStyled>
        {info.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <InfoStyled key={index}>{item}</InfoStyled>
        ))}
        <br /><br />
        <DescriptionStyled>Command to configure the software:</DescriptionStyled>
        <InputStyled type="text" value={command} onFocus={e => e.target.select()} readonly />
      </InfoContentStyled>
      <ButtonContentStyled>
        <ButtonStyled href={minerLink}>Download Release</ButtonStyled>
      </ButtonContentStyled>
    </BoxStyled>
  )
}

export default MinerCard
