import Text from 'atoms/Text/Text';
import { minWidth } from 'helpers/responsive';
import applyTransparence from 'helpers/transparentize';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { colorVariables } from 'styles/variables';

const ButtonStyled = styled.button<IButtonProps>`
  box-sizing: border-box;
  display: inline-block;
  background: none;
  cursor: pointer;
  user-select: none;
  border-radius: 10px;
  color: ${colorVariables.white};
  padding: 17px;
  min-width: 215px;
  text-align: center;
  white-space: nowrap;
  ${props => props.full && 'width: 100%;'};
  border: 1px solid ${applyTransparence(0.5, colorVariables.gunPowder)};
  &:focus {
    outline: none;
  }
  &:hover {
    border: 1px solid ${applyTransparence(1, colorVariables.gunPowder)};
  }
  ${(props: { theme: string }) =>
    props.theme === 'outline' &&
    css`
      background-color: ${applyTransparence(0.1, colorVariables.gunPowder)};
      &:hover {
        background-color: ${applyTransparence(0.5, colorVariables.gunPowder)};
      }
    `}
  ${(props: { theme: string }) =>
    props.theme === 'transparent' &&
    css`
      min-width: 0;
	    background-color: rgba(0, 0, 0, .75);
      backdrop-filter: blur(6px);
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.05);
        backdrop-filter: blur(18px);
      }
    `}
  ${(props: { theme: string }) =>
    props.theme === 'email' &&
    css`
      background-color: ${applyTransparence(0.2, colorVariables.gunPowder)};
      &:hover {
        background-color: ${applyTransparence(0.5, colorVariables.gunPowder)};
      }
      ${minWidth(
        'tablet',
        css`
          padding: 30px 74px;
        `,
      )}
    `}
`

interface IButtonProps {
  onClick?: () => void
  href?: string
  theme?: 'outline' | 'transparent' | 'email'
  full?: boolean
  children: React.ReactNode;
}

const Button = ({ onClick, children, href, theme = 'outline', full = false }: IButtonProps) => {
  const renderedButton = (
    <ButtonStyled type="button" theme={theme} onClick={onClick}>
      <Text size={theme === 'email' ? 'large' : 'small'}>
        {children}
      </Text>
    </ButtonStyled>
  )
  if (theme === 'email') {
    return <Link href={'mailto:' + children} className="buttonlink">{renderedButton}</Link>
  }
  if (href) {
    return <Link href={href} className="buttonlink">{renderedButton}</Link>
  }
  return renderedButton
}

export default Button
