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
    case deviceWidth < deviceSize.tablet:
      return deviceNames.mobileL
    case deviceWidth < deviceSize.laptop:
      return deviceNames.tablet
    case deviceWidth < deviceSize.laptopL:
      return deviceNames.laptop
    case deviceWidth < deviceSize.desktop:
      return deviceNames.laptop
    default:
      return deviceNames.desktop
  }
}

export { deviceSize, deviceNames }
