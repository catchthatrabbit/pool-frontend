import React, { FC } from 'react';
import { colorVariables, fonts } from 'styles/variables';

import styled from 'styled-components';

const StyledText = styled.text`
  font-size: ${(props) =>
    props.fontSize === 'tiny' && '10px' ||
    props.fontSize === 'small' && '12px' ||
    props.fontSize === 'medium' && '14px' ||
    props.fontSize === 'large' && '18px' ||
    props.fontSize === 'very-large' && '24px' ||
    '48px'
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
  fontSize: 'tiny' | 'small' | 'medium' | 'large' | 'very-large' | 'ultra-large',
  fontFamily: 'primary' | 'secondary',
  color: 'white' | 'apple' | 'santasGray',
  italic: boolean,
  fontWeight: 'bold' | 'normal' | 'light'
}

const Text: FC<IProps> = ({
  children,
  fontSize = '24',
  fontFamily = 'good-times, sans-serif',
  color = 'white',
  italic = false,
  fontWeight = 'normal',
}) => (
  <StyledText
    fontSize={fontSize}
    fontFamily={fontFamily}
    color={color}
    italic={italic}
    fontWeight={fontWeight}
  >
    {children}
  </StyledText>
);

export default Text;
