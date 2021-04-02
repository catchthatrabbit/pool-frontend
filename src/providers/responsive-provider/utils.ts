export type ResponsiveDeviceName =
  | 'mobileL'
  | 'tablet'
  | 'laptop'
  | 'laptopL'
  | 'desktop'

const deviceSize: { [key in ResponsiveDeviceName]: number } = {
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 1920,
}

const deviceNames: { [key in ResponsiveDeviceName]: ResponsiveDeviceName } = {
  mobileL: 'mobileL',
  tablet: 'tablet',
  laptop: 'laptop',
  laptopL: 'laptopL',
  desktop: 'desktop',
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

export { deviceSize, deviceNames }
