import { useState, useEffect } from 'react'
import { node } from 'prop-types'

import GlobalResponsiveStyless from './style'
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
    <>
      <ResponsiveContext.Provider value={deviceType}>
        <GlobalResponsiveStyless />
        {children}
      </ResponsiveContext.Provider>
    </>
  )
}

ResponsiveProvider.propTypes = {
  children: node.isRequired,
}

export default ResponsiveProvider
