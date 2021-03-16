import { useContext } from 'react'
import ScrollContext from './context'
import ScrollProvider from './provider'

const useScroll = () => {
  return useContext(ScrollContext)
}

export { useScroll, ScrollProvider }
