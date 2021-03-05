import React, { FC } from 'react';
import { colorVariables, fonts } from 'styles/variables';

import styled from 'styled-components';

const StyledText = styled.text<IProps>`
  font-size: ${(props) =>
    props.fontSize === 'tiny' && '10px' ||
    props.fontSize === 'small' && '12px' ||
    props.fontSize === 'medium' && '14px' ||
    props.fontSize === 'very-large' && '24px' ||
    props.fontSize === 'ultra-large' && '48px' ||
    '18px'
};
  font-family: ${(props) => (props.fontFamily === 'primary' ? fonts.primary : fonts.secondary)};
  color: ${(props) =>
    props.color === 'white' && colorVariables.white ||
    props.color === 'apple' && colorVariables.apple ||
    colorVariables.santasGray
};
  font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
  font-weight: ${(props) =>
    props.fontWeight === 'bold' && 'bold' ||
    props.fontWeight === 'light' && '100' ||
    'normal'
};
`;

interface IProps {
  size: 'tiny' | 'small' | 'medium' | 'large' | 'very-large' | 'ultra-large',
  fontFamily: 'primary' | 'secondary',
  color: 'white' | 'apple' | 'santasGray',
  italic?: boolean,
  fontWeight?: 'bold' | 'normal' | 'light'
}

const Text: FC<IProps> = ({
  children,
  size = 'large',
  fontFamily = 'primary',
  color = 'white',
  italic = false,
  fontWeight = 'normal',
}) => (
  <StyledText
    fontSize={size}
    fontFamily={fontFamily}
    color={color}
    italic={italic}
    fontWeight={fontWeight}
  >
    {children}
  </StyledText>
);

export default Text;
