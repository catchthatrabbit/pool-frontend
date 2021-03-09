import React, { FC } from 'react';
import { colorVariables, fonts } from 'styles/variables';

import styled from 'styled-components';

interface IProps {
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'very-large' | 'ultra-large',
  fontFamily?: 'primary' | 'secondary',
  color?: 'white' | 'apple' | 'santasGray' | 'red',
  italic?: boolean,
  fontWeight?: 'bold' | 'normal' | 'light'
}

const StyledText = styled.text < IProps > `
  white-space: nowrap;
  font-size: ${(props: IProps) =>
    props.size === 'tiny' && '10px' ||
    props.size === 'small' && '12px' ||
    props.size === 'medium' && '14px' ||
    props.size === 'large' && '18px' ||
    props.size === 'very-large' && '24px' ||
    props.size === 'ultra-large' && '42px' ||
    '18px'
};
  font-family: ${(props: IProps) => (props.fontFamily === 'primary' ? fonts.primary : fonts.secondary)};
  color: ${(props: IProps) =>
    props.color === 'white' && colorVariables.white ||
    props.color === 'apple' && colorVariables.apple ||
    props.color === 'santasGray' && colorVariables.santasGray ||
    props.color === 'red' && colorVariables.red
};
  font-style: ${(props: IProps) => (props.italic ? 'italic' : 'normal')};
  font-weight: ${(props: IProps) =>
    props.fontWeight === 'bold' && 'bold' ||
    props.fontWeight === 'light' && '100' ||
    '600'
};
`;

const Text: FC<IProps> = ({
  children,
  size = 'large',
  fontFamily = 'primary',
  color = 'white',
  italic = false,
  fontWeight = 'normal',
}) => (
  <StyledText
    size={size}
    fontFamily={fontFamily}
    color={color}
    italic={italic}
    fontWeight={fontWeight}
  >
    {children}
  </StyledText>
);

export default Text;
