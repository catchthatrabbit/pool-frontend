import { minWidth } from 'helpers/responsive';
import styled, { css } from 'styled-components';

interface IBackgroundProps {
  image?: string
}

const BackgroundStyled = styled.img`
  width: 100%;
  position: absolute;
  top: 30%;
  ${minWidth(
    'desktop',
    css`
      top: 10%;
    `,
  )}
`
const Background = ({ image = '/images/statistics_bg.png' }: IBackgroundProps) => (
  <BackgroundStyled src={image} alt="background image" />
)

export default Background
