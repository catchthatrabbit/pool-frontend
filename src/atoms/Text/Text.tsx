import React, { FC, MouseEventHandler } from 'react'
import { colorVariables, fonts } from 'styles/variables'

import styled from 'styled-components'
import { minWidth } from 'helpers/responsive'

export type TextColor = 'white' | 'apple' | 'santasGray' | 'red'

interface IProps {
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'very-large' | 'ultra-large'
  fontFamily?: 'primary' | 'secondary'
  color?: TextColor
  italic?: boolean
  fontWeight?: 'bold' | 'normal' | 'light'
  active?: boolean
  className?: string
  onClick?: MouseEventHandler
  space?: 'nowrap' | 'initial'
}

const TextStyled = styled.text<IProps>`
  font-family: ${(props: IProps) =>
    props.fontFamily === 'primary' ? fonts.primary : fonts.secondary};
  color: ${(props: IProps) =>
    (props.color === 'white' && colorVariables.white) ||
    (props.color === 'apple' && colorVariables.apple) ||
    (props.color === 'santasGray' && colorVariables.santasGray) ||
    (props.color === 'red' && colorVariables.red)};
  font-style: ${(props: IProps) => (props.italic ? 'italic' : 'normal')};
  font-weight: ${(props: IProps) =>
    (props.fontWeight === 'bold' && 'bold') ||
    (props.fontWeight === 'light' && '100') ||
    '600'};
  ${(props) =>
    props.active &&
    `
      border-bottom: 3px solid ${colorVariables.white};
      padding-bottom: 8px;
    `};
  ${(props) =>
    (props.space === 'nowrap' &&
      `
      white-space: nowrap;
    `) ||
    `white-space: initial;`};

  ${(props: IProps) =>
    `font-size: ${
      (props.size === 'tiny' && '11px') ||
      (props.size === 'small' && '12px') ||
      (props.size === 'medium' && '13px') ||
      (props.size === 'large' && '13px') ||
      (props.size === 'very-large' && '14px') ||
      (props.size === 'ultra-large' && '27px')
    };`};
  ${(props: IProps) =>
    minWidth(
      'tablet',
      `
        font-size: ${
          (props.size === 'tiny' && '12px') ||
          (props.size === 'small' && '12px') ||
          (props.size === 'medium' && '13px') ||
          (props.size === 'large' && '14px') ||
          (props.size === 'very-large' && '16px') ||
          (props.size === 'ultra-large' && '27px')
        };
      `,
    )};
  ${(props: IProps) =>
    minWidth(
      'laptop',
      `
        font-size: ${
          (props.size === 'tiny' && '12px') ||
          (props.size === 'small' && '12px') ||
          (props.size === 'medium' && '14px') ||
          (props.size === 'large' && '18px') ||
          (props.size === 'very-large' && '18px') ||
          (props.size === 'ultra-large' && '27px')
        };
      `,
    )};
  ${(props: IProps) =>
    minWidth(
      'laptopL',
      `
        font-size: ${
          (props.size === 'tiny' && '10px') ||
          (props.size === 'small' && '12px') ||
          (props.size === 'medium' && '14px') ||
          (props.size === 'large' && '18px') ||
          (props.size === 'very-large' && '24px') ||
          (props.size === 'ultra-large' && '42px')
        };
      `,
    )};
`

const Text: FC<IProps> = ({
  children,
  size = 'large',
  fontFamily = 'primary',
  color = 'white',
  italic = false,
  fontWeight = 'normal',
  active = false,
  className,
  onClick,
  space = 'nowrap',
}) => (
  <TextStyled
    size={size}
    fontFamily={fontFamily}
    color={color}
    italic={italic}
    fontWeight={fontWeight}
    active={active}
    className={className}
    onClick={onClick}
    space={space}
  >
    {children}
  </TextStyled>
)

export default Text
