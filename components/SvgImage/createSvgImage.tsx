import React, { FC } from 'react';
// @ts-ignore
import SvgImage from './SvgImage.tsx';

interface IProps {
  width: number | string,
  height: number | string,
  viewBox: string,
}
const CreateSvgImage: FC<IProps> = ({
  width = 140,
  height = 90,
  viewBox = '0 0 140 90',
}, path) => (
  <SvgImage width={width} height={height} viewBox={viewBox}>
    {path}
  </SvgImage>
);

export default CreateSvgImage;
