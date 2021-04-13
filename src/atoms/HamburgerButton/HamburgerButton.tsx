import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { colorVariables } from 'styles/variables'

interface IProps {
  opened: boolean
  onClick?: () => void
  className?: string
}

const ButtonStyled = styled.button<IProps>`
  height: 48px;
  width: 40px;
  background: inherit;
  border: none;
  cursor: pointer;
  user-select: none;
  .hamburgerButton_bar1,
  .hamburgerButton_bar2,
  .hamburgerButton_bar3 {
    width: 30px;
    margin: 7px 0;
    height: 2px;
    border-radius: 2px;
    background: ${colorVariables.white};
    transition: 1s;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    .hamburgerButton_bar1,
    .hamburgerButton_bar2,
    .hamburgerButton_bar3 {
      background: ${colorVariables.aluminium};
    }
  }

  ${({ opened }) =>
    opened &&
    css`
      .hamburgerButton_bar1 {
        transform: translateY(4.5px) rotate(225deg);
      }
      .hamburgerButton_bar3 {
        transform: translateY(-4.5px) rotate(315deg);
      }
      .hamburgerButton_bar2 {
        position: absolute;
        opacity: 0.2;
        transform: translateY(7px);
      }
    `}
`

const HamburgerButton: FC<IProps> = ({ opened, onClick, className }) => {
  return (
    <ButtonStyled
      type="button"
      onClick={onClick}
      opened={opened}
      className={className}
    >
      <div className="hamburgerButton_bar1" />
      <div className="hamburgerButton_bar2" />
      <div className="hamburgerButton_bar3" />
    </ButtonStyled>
  )
}

export default HamburgerButton
