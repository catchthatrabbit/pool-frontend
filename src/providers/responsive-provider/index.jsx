import { useState, useEffect } from 'react';

import GlobalResponsiveStyless from './style';
import ResponsiveContext from './context';
import { getDeviceNameBasedOnSize, getDeviceDimensions } from './utils';

const ResponsiveProvider = () => {
  const [deviceType, setDeviceType] = useState(null);
  const setDeviceTypeEventListener = () => {
    setDeviceType(getDeviceNameBasedOnSize(getDeviceDimensions()));
  };

  useEffect(() => {
    let resizeEventListener;
    if (process.browser) {
      resizeEventListener = window.addEventListener(
        'resize',
        setDeviceTypeEventListener,
      );
    }
    return function () {
      window.removeEventListener('resize', resizeEventListener);
    };
  }, []);

  return (
    <>
      <ResponsiveContext.Provider value={deviceType}>
        <GlobalResponsiveStyless />
      </ResponsiveContext.Provider>
    </>
  );
};

export default ResponsiveProvider;
