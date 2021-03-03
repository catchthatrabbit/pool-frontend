import React, { FC } from 'react';

import styled from 'styled-components';

const SvgImageStyled = styled.svg`
  display: inline-block;
  color: inherit;
  fill: currentColor;
  cursor: inherit;
  pointer-events: inherit;
`;

interface IProps {
  width: number | string,
  height: number | string,
  viewBox: string,
}

const SvgImage: FC<IProps> = ({
  children,
  width = 140,
  height = 90,
  viewBox = '0 0 140 90',
}) => (
  <SvgImageStyled
    viewBox={viewBox}
    width={width}
    height={height}
    focusable={false}
  >
    {children}
  </SvgImageStyled>
);

export default SvgImage;
