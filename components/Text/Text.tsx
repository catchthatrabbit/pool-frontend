import React, { FC } from 'react';
import { colorVariables, fonts } from 'styles/variables';

import styled, { css } from 'styled-components';

const StyledText = styled.text`
  ${(props: { theme: string; }) =>
    props.theme === 'header-tittle'
    && css`
      font-size: 42px;
      font-family: ${fonts.primary};
      font-style: italic;
      color: ${colorVariables.white};
    `
}
  ${(props: { theme: string; }) =>
    props.theme === 'header-tittle-alt-color'
    && css`
      font-size: 42px;
      font-family: ${fonts.primary};
      font-style: italic;
      color: ${colorVariables.apple};
    `
}
  ${(props: { theme: string; }) =>
    props.theme === 'header-sub-text'
    && css`
      font-size: 24px;
      font-family: ${fonts.secondary};
      color: ${colorVariables.santasGray};
    `
}
  ${(props: { theme: string; }) =>
    props.theme === 'footer-title'
    && css`
      font-size: 18px;
      font-family: ${fonts.primary};
      font-style: italic;
      color: ${colorVariables.white};
    `
}
  ${(props: { theme: string; }) =>
    props.theme === 'footer-title-alt-color'
    && css`
      font-size: 18px;
      font-family: ${fonts.primary};
      font-style: italic;
      color: ${colorVariables.apple};
    `
}
  ${(props: { theme: string; }) =>
    props.theme === 'paragraph-text'
    && css`
      font-size: 14px;
      font-family: ${fonts.secondary};
      color: ${colorVariables.white};
    `
}
  ${(props: { theme: string; }) =>
    props.theme === 'table-text'
    && css`
      font-size: 14px;
      font-family: ${fonts.secondary};
      font-weight: bold;
      color: ${colorVariables.white};
    `
}
  ${(props: { theme: string; }) =>
    props.theme === 'button-text'
    && css`
      font-size: 12px;
      font-family: ${fonts.primary};
      font-style: italic;
      color: ${colorVariables.white};
    `
}
  ${(props: { theme: string; }) =>
    props.theme === 'info-box-number'
    && css`
      font-size: 24px;
      font-family: ${fonts.primary};
      font-style: italic;
      color: ${colorVariables.white};
    `
}
  ${(props: { theme: string; }) =>
    props.theme === 'info-box-second'
    && css`
      font-size: 18px;
      font-family: ${fonts.primary};
      font-style: italic;
      color: ${colorVariables.white};
    `
}
  ${(props: { theme: string; }) =>
    props.theme === 'info-box-third'
    && css`
      font-size: 12px;
      font-family: ${fonts.primary};
      font-style: italic;
      color: ${colorVariables.white};
    `
}
 ${(props: { theme: string; }) =>
    props.theme === 'info-box-fourth'
    && css`
      font-size: 12px;
      font-family: ${fonts.primary};
      font-weight: 100;
      color: ${colorVariables.white};
    `
}
 ${(props: { theme: string; }) =>
    props.theme === 'pool-graph-label'
    && css`
      font-size: 12px;
      font-family: ${fonts.secondary};
      color: ${colorVariables.white};
    `
}
 ${(props: { theme: string; }) =>
    props.theme === 'pool-graph-centre-date'
    && css`
      font-size: 24px;
      font-family: ${fonts.primary};
      font-weight: bold;
      color: ${colorVariables.white};
    `
}
 ${(props: { theme: string; }) =>
    props.theme === 'pool-graph-time-line'
    && css`
      font-size: 18px;
      font-family: ${fonts.primary};
      color: ${colorVariables.white};
    `
}
`;

interface IProps {
  theme:
    'header-tittle' |
    'header-tittle-alt-color' |
    'header-sub-text' |
    'footer-title' |
    'footer-title-alt-color' |
    'paragraph-text' |
    'table-text' |
    'button-text' |
    'info-box-number' |
    'info-box-second' |
    'info-box-third' |
    'info-box-fourth' |
    'pool-graph-label' |
    'pool-graph-centre-date' |
    'pool-graph-time-line';
}

const Text: FC<IProps> = ({
  children,
  theme = '',
}) => (
  <StyledText theme={theme}>
    {children}
  </StyledText>
);

export default Text;
