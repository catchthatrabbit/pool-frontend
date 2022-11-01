import React from 'react'

import {
  getDeviceDimensions,
  getDeviceNameBasedOnSize,
  ResponsiveDeviceName,
} from './utils'

export const deviceNameBasedOnSize = getDeviceNameBasedOnSize(
  getDeviceDimensions(),
)
const ResponsiveContext = React.createContext<ResponsiveDeviceName>(
  deviceNameBasedOnSize,
)

export default ResponsiveContext
