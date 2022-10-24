import { minWidth } from 'helpers/responsive';
import styled from 'styled-components';
import { colorVariables, fonts } from 'styles/variables';

export type TextColor = 'white' | 'apple' | 'santasGray' | 'red'

interface ITextProps {
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'very-large' | 'ultra-large'
  fontFamily?: 'primary' | 'secondary'
  color?: TextColor
  italic?: boolean
  fontWeight?: 'bold' | 'normal' | 'light'
  active?: boolean
  className?: string
  onClick?: React.MouseEventHandler
  space?: 'nowrap' | 'initial'
  children: React.ReactNode;
}

const TextStyled = styled.span<ITextProps>`
  font-family: ${(props: ITextProps) =>
    props.fontFamily === 'primary' ? fonts.primary : fonts.secondary};
  letter-spacing: ${(props: ITextProps) =>
    props.fontFamily === 'primary' ? '0.05em' : '0.05em'};
  color: ${(props: ITextProps) =>
    (props.color === 'white' && colorVariables.white) ||
    (props.color === 'apple' && colorVariables.apple) ||
    (props.color === 'santasGray' && colorVariables.santasGray) ||
    (props.color === 'red' && colorVariables.red)};
  font-style: ${(props: ITextProps) => (props.italic ? 'italic' : 'normal')};
  font-weight: ${(props: ITextProps) =>
    (props.fontWeight === 'bold' && '600') ||
    (props.fontWeight === 'normal' && '400') ||
    (props.fontWeight === 'light' && '100') ||
    '400'};
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

  ${(props: ITextProps) =>
    `font-size: ${
      (props.size === 'tiny' && '10px') ||
      (props.size === 'small' && '12px') ||
      (props.size === 'medium' && '14px') ||
      (props.size === 'large' && '15px') ||
      (props.size === 'very-large' && '18px') ||
      (props.size === 'ultra-large' && '22px')
    };`};
  ${(props: ITextProps) =>
    minWidth(
      'tablet',
      `
        font-size: ${
          (props.size === 'tiny' && '11px') ||
          (props.size === 'small' && '14px') ||
          (props.size === 'medium' && '16px') ||
          (props.size === 'large' && '18px') ||
          (props.size === 'very-large' && '22px') ||
          (props.size === 'ultra-large' && '38px')
        };
      `,
    )};
  ${(props: ITextProps) =>
    minWidth(
      'laptop',
      `
        font-size: ${
          (props.size === 'tiny' && '11px') ||
          (props.size === 'small' && '14px') ||
          (props.size === 'medium' && '16px') ||
          (props.size === 'large' && '18px') ||
          (props.size === 'very-large' && '22px') ||
          (props.size === 'ultra-large' && '38px')
        };
      `,
    )};
  ${(props: ITextProps) =>
    minWidth(
      'laptopL',
      `
        font-size: ${
          (props.size === 'tiny' && '11px') ||
          (props.size === 'small' && '14px') ||
          (props.size === 'medium' && '16px') ||
          (props.size === 'large' && '18px') ||
          (props.size === 'very-large' && '22px') ||
          (props.size === 'ultra-large' && '38px')
        };
      `,
    )};
`

const Text = ({
  children,
  size = 'medium',
  fontFamily = 'primary',
  color = 'white',
  italic = false,
  fontWeight = 'normal',
  active = false,
  className,
  onClick,
  space = 'nowrap',
}: ITextProps) => (
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
