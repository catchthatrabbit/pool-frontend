import {
  deviceSize,
  ResponsiveDeviceName,
} from 'providers/responsive-provider/utils'
import { FlattenSimpleInterpolation } from 'styled-components'

export const minWidth = (
  deviceName: ResponsiveDeviceName,
  styles: FlattenSimpleInterpolation | string | false,
) => `
  @media screen and (min-width: ${deviceSize[deviceName]}px) {
    ${styles ? styles : ''}
  }
`
