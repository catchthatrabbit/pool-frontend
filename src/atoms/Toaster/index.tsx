import toast, { Toaster } from 'react-hot-toast';

import type { ToasterProps } from 'react-hot-toast';

export const notify = toast

const ToasterWrapper = (props: ToasterProps) => (
  <Toaster
    position="bottom-right"
    containerStyle={ { top: 30, left: 30, bottom: 30, right: 30 } }
    { ...props }
  />
)


export default ToasterWrapper
