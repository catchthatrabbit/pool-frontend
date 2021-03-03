import Link from 'next/link';
import React, { FC } from 'react';

import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  background: none;
  cursor: pointer;
  user-select: none;
  border-radius: 10px;
  color: var(--white);
  padding: 20px;
  font-family: var(--primary-font-family);
  font-style: italic
  font-size: 12px;
  min-width: 215px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid rgba(var(--gun-powder-rgb), 0.5);
  &:focus {
    outline: none;
  }
  &:hover {
    border: 1px solid rgba(var(--gun-powder-rgb), 1);
  }
  ${(props: { theme: string; }) =>
    props.theme === 'outline' &&
    css`
      background-color: rgba(var(--gun-powder-rgb), 0.1);
      &:hover {
        background-color: rgba(var(--gun-powder-rgb), 0.5);
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
  href: string;
  theme: 'outline' | 'transparent';
}

const Button: FC<IProps> = ({
  onClick,
  children,
  href,
  theme = 'outline',
}) => {
  if (href) {
    return (
      <Link href={href}>
        <StyledButton type="button" theme={theme}>
          {children}
        </StyledButton>
      </Link>
    );
  }
  return (
    <StyledButton theme={theme} type="button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
