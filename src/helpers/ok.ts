export default function ok(status) {
  if (Boolean(status) === true) {
    return 'OK 🐰'
  } else {
    return 'RIP 😵'
  }
}
