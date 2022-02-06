import Link from 'next/link'
import React, { FC } from 'react'
import { colorVariables } from 'styles/variables'
import styled, { css } from 'styled-components'
import Text from 'atoms/Text/Text'
import applyTransparence from 'helpers/transparentize'
import { minWidth } from 'helpers/responsive'

const ButtonStyled = styled.button<IProps>`
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

interface IProps {
  onClick?: () => void
  href?: string
  theme?: 'outline' | 'transparent' | 'email'
  full?: boolean
}

const Button: FC<IProps> = ({ onClick, children, href, theme = 'outline', full = false }) => {
  const renderedButton = (
    <ButtonStyled type="button" theme={theme} onClick={onClick} full={full}>
      <Text size={theme === 'email' ? 'large' : 'small'}>
        {children}
      </Text>
    </ButtonStyled>
  )
  if (theme === 'email') {
    return <Link href={'mailto:' + children}>{renderedButton}</Link>
  }
  if (href) {
    return <Link href={href}>{renderedButton}</Link>
  }
  return renderedButton
}

export default Button
