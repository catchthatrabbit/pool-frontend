import Link from 'next/link';
import React, { FC } from 'react';
import { colorVariables } from 'styles/variables';
import styled, { css } from 'styled-components';
import Text from 'atoms/Text/Text';
import applyTransparence from 'helpers/transparentize';

const StyledButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  background: none;
  cursor: pointer;
  user-select: none;
  border-radius: 10px;
  color: ${colorVariables.white};
  padding: 20px;
  min-width: 215px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid ${applyTransparence(0.5, colorVariables.gunPowder)};
  &:focus {
    outline: none;
  }
  &:hover {
    border: 1px solid ${applyTransparence(1, colorVariables.gunPowder)};
  }
  ${(props: { theme: string; }) =>
    props.theme === 'outline' &&
    css`
      background-color: ${applyTransparence(0.5, colorVariables.gunPowder)};
      &:hover {
        background-color: ${applyTransparence(0.1, colorVariables.gunPowder)};
      }
    `
  }
  ${(props: { theme: string; }) =>
    props.theme === 'transparent' &&
    css`
      backdrop-filter: blur(6px);
      transition: transform 0.3s;
      &:hover {
        transform: scale(1.05);
        backdrop-filter: blur(18px);
      }
    `
  }
`;

interface IProps {
  onClick?: () => void;
  href?: string;
  theme?: 'outline' | 'transparent';
}

const Button: FC<IProps> = ({
  onClick,
  children,
  href,
  theme = 'outline',
}) => {
  const renderedButton = (
    <StyledButton type="button" theme={theme} onClick={onClick}>
      <Text size="small" italic> {children} </Text>
    </StyledButton>
  );
  if (href) {
    return (
      <Link href={href}>
        {renderedButton}
      </Link>
    );
  }
  return renderedButton;
};

export default Button;
