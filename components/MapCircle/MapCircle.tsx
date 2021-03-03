import React from 'react';
import styled, { keyframes } from 'styled-components';

const Circle = styled.div`
  height: 18px;
  width: 18px;
  background: var(--white);
  border-radius: 50%;
  @media screen and (min-width: var(--large-screen)) {
    height: 24px;
    width: 24px;
  }
`;
const pulse = keyframes`
  0% {
    border-color: rgba(var(--white-rgb), 0.6);
  }
  33% {
    border-color: rgba(var(--white-rgb), 1);
  }
  66% {
    border-color: rgba(var(--white-rgb), 0.4);
  }
  100% {
    border-color: rgba(var(--white-rgb), 0.2);
  }
`;
const Border = styled.div`
  box-sizing: border-box;
  padding: 3px;
  border-radius: 50%;
`;
const Border1 = styled(Border)`
  border: 3px solid;
  animation: ${pulse} infinite normal 2s 0s;
`;
const Border2 = styled(Border)`
  border: 2px solid;
  animation: ${pulse} infinite normal 2s 0.5s;
`;
const Border3 = styled(Border)`
  display: inline-block;
  border: 1px solid;
  animation: ${pulse} infinite normal 2s 1s;
`;

const MapCircle = () => (
  <Border3>
    <Border2>
      <Border1>
        <Circle />
      </Border1>
    </Border2>
  </Border3>
);

export default MapCircle;
