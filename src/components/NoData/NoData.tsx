import Text from 'atoms/Text';
import styled from 'styled-components';
import { colorVariables } from 'styles/variables';

const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 200px 100px;

  span + span {
    margin-top: 1rem;
    color: ${colorVariables.santasGray}
  }
`

interface INoDataProps {
  hint?: string
}

const NoData = ({ hint }: INoDataProps) => {
  return (
    <ContentStyled>
      <Text size="ultra-large">No Data</Text>
      {!!hint && <Text>{hint}</Text>}
    </ContentStyled>
  )
}
export default NoData
