export type ResponsiveDeviceName =
  | 'mobileS'
  | 'mobileM'
  | 'mobileL'
  | 'tablet'
  | 'laptop'
  | 'laptopL'
  | 'desktop'

const deviceSize: { [key in ResponsiveDeviceName]: number } = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
}

const deviceNames: { [key in ResponsiveDeviceName]: ResponsiveDeviceName } = {
  mobileS: 'mobileS',
  mobileM: 'mobileM',
  mobileL: 'mobileL',
  tablet: 'tablet',
  laptop: 'laptop',
  laptopL: 'laptopL',
  desktop: 'desktop',
}

const responsive = {
  largeScreens: {
    lg: deviceSize.desktop,
    md: deviceSize.laptopL,
    sm: deviceSize.laptop,
  },
  tablet: {
    medium: deviceSize.tablet,
  },
  mobileDevice: {
    large: deviceSize.mobileL,
    medium: deviceSize.mobileM,
    small: deviceSize.mobileS,
  },
}

const mediaQueriesMaxWidth = {
  mobileS: `(max-width: ${deviceSize.mobileS}px)`,
  mobileM: `(max-width: ${deviceSize.mobileM}px)`,
  mobileL: `(max-width: ${deviceSize.mobileL}px)`,
  tablet: `(max-width: ${deviceSize.tablet}px)`,
  laptop: `(max-width: ${deviceSize.laptop}px)`,
  laptopL: `(max-width: ${deviceSize.laptopL}px)`,
  desktop: `(max-width: ${deviceSize.desktop}px)`,
}
const mediaQueriesMinWidth = {
  mobileS: `(min-width: ${deviceSize.mobileS}px)`,
  mobileM: `(min-width: ${deviceSize.mobileM}px)`,
  mobileL: `(min-width: ${deviceSize.mobileL}px)`,
  tablet: `(min-width: ${deviceSize.tablet}px)`,
  laptop: `(min-width: ${deviceSize.laptop}px)`,
  laptopL: `(min-width: ${deviceSize.laptopL}px)`,
  desktop: `(min-width: ${deviceSize.desktop}px)`,
}

export const getDeviceDimensions = () => {
  let deviceHeight
  let deviceWidth
  if (process.browser) {
    deviceHeight = window.innerHeight
    deviceWidth = window.innerWidth
  }
  return {
    deviceHeight,
    deviceWidth,
  }
}

export const getDeviceNameBasedOnSize = (device): ResponsiveDeviceName => {
  const { deviceWidth } = device
  switch (true) {
    case deviceWidth <= deviceSize.mobileS:
      return deviceNames.mobileS
    case deviceWidth <= deviceSize.mobileM:
      return deviceNames.mobileM
    case deviceWidth <= deviceSize.mobileL:
      return deviceNames.mobileL
    case deviceWidth <= deviceSize.tablet:
      return deviceNames.tablet
    case deviceWidth <= deviceSize.laptop:
      return deviceNames.laptop
    case deviceWidth <= deviceSize.laptopL:
      return deviceNames.laptopL
    case deviceWidth <= deviceSize.desktop:
      return deviceNames.desktop
    default:
      return deviceNames.desktop
  }
}

export {
  deviceSize,
  responsive,
  mediaQueriesMaxWidth,
  mediaQueriesMinWidth,
  deviceNames,
}
