export default function hideMiddleContent(value) {
  return `${value.slice(0, 10)}.........${value.slice(-6)}`;
}
