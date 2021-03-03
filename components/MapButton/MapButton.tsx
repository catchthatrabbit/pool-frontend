import React, { FC } from 'react';
import styled from 'styled-components';

import Button from '../Button';
import MapCircle from '../MapCircle';

const MapButtonStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 125px;
`;

interface IProps {
  href: string,
}

const MapButton: FC<IProps> = ({
  children, href = '',
}) => (
  <MapButtonStyled>
    <MapCircle />
    <Button theme="transparent" href={href}>
      {children}
    </Button>
  </MapButtonStyled>
);

export default MapButton;
