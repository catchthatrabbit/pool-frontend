export default function ago(date, short = false) {
  var seconds = Math.floor(((new Date().getTime()/1000) - Date.parse(date)))
  var interval = seconds / 31536000
  if (interval > 1) {
    return Math.floor(interval) + (short ? " y ago" : " years ago")
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + (short ? " mth ago" : " months ago")
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + (short ? " d ago" : " days ago")
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + (short ? " h ago" : " hours ago")
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + (short ? " min ago" : " minutes ago")
  }
  return Math.floor(seconds) + (short ? " s ago" : " seconds ago")
}
