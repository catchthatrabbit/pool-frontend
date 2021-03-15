import { transparentize } from 'polished'

export default function applyTransparence(percent, color) {
  return transparentize(1 - percent, color)
}
