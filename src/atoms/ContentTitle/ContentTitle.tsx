import Text from 'atoms/Text/Text';
import styled from 'styled-components';
import { poolConfig } from 'config';

const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
const ImageStyled = styled.div`
  margin-right: 25px;
  display: flex;
  align-items: center;
  height: 96px;
`

interface IContentTitleProps {
  Image: React.ReactNode
  children: React.ReactNode;
}

const ContentTitle = ({ children: title, Image }: IContentTitleProps) => (
  <WrapperStyled>
    { poolConfig.POOL_OPTIONS.effects.showActionIcons && (
    <ImageStyled>{Image}</ImageStyled>
    )}
    <Text size="ultra-large">
      {title}
    </Text>
  </WrapperStyled>
)

export default ContentTitle
