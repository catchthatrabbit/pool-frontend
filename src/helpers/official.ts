export default function official() {
  if (typeof window !== 'undefined') {
    if (window.location.hostname === "catchthatrabbit.com" && window.location.protocol === "https:") {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
