import { poolConfig } from 'config'

export default function official() {
  if (typeof window !== 'undefined') {
    if (window.location.hostname === "catchthatrabbit.com" && window.location.protocol === "https:") {
      return true
    } else {
      return false
    }
  } else {
    poolConfig.POOL_OFFICIAL
  }
}
