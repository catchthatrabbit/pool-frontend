import { memo, useEffect, useState } from 'react';

import { throttle } from '../../helpers/throttle';
import ScrollContext, { ScrollState } from './context';

interface IScrollProviderProps {
  children: React.ReactNode;
}

const ScrollProvider = ({ children }: IScrollProviderProps) => {
  const [ state, setState ] = useState<ScrollState>({
    prevScrollPos: 0,
    currentScrollPos: 0,
  })

  const handleOnScroll = throttle(
    () => setState(prev => ({ prevScrollPos: prev.currentScrollPos, currentScrollPos: window.pageYOffset })),
      60,
    )

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll)
    return () => window.removeEventListener('scroll', handleOnScroll)
  }, [])

  return (
    <ScrollContext.Provider value={ state }>
      { children }
    </ScrollContext.Provider>
  )
}

export default memo(ScrollProvider)