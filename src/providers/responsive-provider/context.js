import React from 'react';
import {
  getDeviceDimensions,
  getDeviceNameBasedOnSize,
} from './utils';
const deviceNameBasedOnSize = getDeviceNameBasedOnSize(
  getDeviceDimensions()
);
const ResponsiveContext = React.createContext(deviceNameBasedOnSize);

export default ResponsiveContext;
