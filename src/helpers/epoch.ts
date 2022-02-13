export default function epoch(date, short = false) {
  var seconds = Math.floor((Date.parse(date) - (new Date().getTime()/1000)))
  var interval = seconds / 31536000
  if (interval > 1) {
    return "in " + Math.floor(interval) + (short ? " y" : " years")
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return "in " + Math.floor(interval) + (short ? " mth" : " months")
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return "in " + Math.floor(interval) + (short ? " d" : " days")
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return "in " + Math.floor(interval) + (short ? " h" : " hours")
  }
  interval = seconds / 60;
  if (interval > 1) {
    return "in " + Math.floor(interval) + (short ? " min" : " minutes")
  }
  return "in " + Math.floor(seconds) + (short ? " s" : " seconds")
}
