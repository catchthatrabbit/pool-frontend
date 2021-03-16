export function throttle(
  callback: (...args) => void,
  limitMs: number,
): (...args) => Promise<void> {
  let waiting = false // Initially, we're not waiting

  return async function (...args) {
    // We return a throttled function
    if (!waiting) {
      waiting = true // Prevent future invocations
      // If we're not waiting
      await callback(...args)
      setTimeout(function () {
        // After a period of time
        waiting = false // And allow future invocations
      }, limitMs)
    }
  }
}
