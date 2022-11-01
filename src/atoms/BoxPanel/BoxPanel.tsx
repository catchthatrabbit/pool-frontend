import Text from 'atoms/Text';
import styled from 'styled-components';
import { colorVariables } from 'styles/variables';

const BoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px 39px;
  border: 1px solid ${colorVariables.gunPowder};
  border-radius: 10px;
  margin-bottom: 56px;
`
const DescBoxWrapperStyled = styled.div`
  margin: 30px 0 0 0;
  align-self: flex-start;
`
const TextTitleStyled = styled.div`
  border-bottom: 1px solid ${colorVariables.gunPowder};
  padding-bottom: 25px;
`
const TextContentStyled = styled.div`
  margin-top: 37px;
`

interface IBoxPanelProps {
  title: string
  desc: string
  children: React.ReactNode;
}

const BoxPanel = ({ title, desc, children }: IBoxPanelProps) => (
  <BoxStyled>
    <TextTitleStyled>
      <Text size="very-large">
        {title}
      </Text>
    </TextTitleStyled>
    <TextContentStyled>
      <Text size="medium" fontFamily="secondary" space={'initial'}>
        {children}
      </Text>
    </TextContentStyled>
    <DescBoxWrapperStyled>
      <Text size="small" fontFamily="secondary" space={'initial'}>
        {desc}
      </Text>
    </DescBoxWrapperStyled>
  </BoxStyled>
)

export default BoxPanel
