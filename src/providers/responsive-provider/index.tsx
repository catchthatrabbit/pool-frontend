import React, { useState, useEffect } from 'react'

import ResponsiveContext from './context'
import { getDeviceNameBasedOnSize, getDeviceDimensions } from './utils'

const ResponsiveProvider = ({ children }) => {
  const [deviceType, setDeviceType] = useState(
    getDeviceNameBasedOnSize(getDeviceDimensions()),
  )

  const setDeviceTypeEventListener = () => {
    setDeviceType(getDeviceNameBasedOnSize(getDeviceDimensions()))
  }

  useEffect(() => {
    let resizeEventListener
    if (process.browser) {
      resizeEventListener = window.addEventListener(
        'resize',
        setDeviceTypeEventListener,
      )
    }
    return function () {
      window.removeEventListener('resize', resizeEventListener)
    }
  }, [])

  return (
    <ResponsiveContext.Provider value={deviceType}>
      {children}
    </ResponsiveContext.Provider>
  )
}

export default ResponsiveProvider
