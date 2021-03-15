import fetch from 'unfetch'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default fetcher
