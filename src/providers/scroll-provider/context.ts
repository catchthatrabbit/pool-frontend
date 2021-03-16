import React from 'react'

export type ScrollState = {
  prevScrollPos: number
  currentScrollPos: number
}

const ScrollContext = React.createContext<ScrollState>({
  currentScrollPos: 0,
  prevScrollPos: 0,
})

export default ScrollContext
