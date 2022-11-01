import { useState } from 'react'
import HamburgerButton from './HamburgerButton'

export default {
  title: 'HamburgerButton',
  component: HamburgerButton,
  argTypes: {},
}

export const HamburgerButtonBasic = (args) => {
  const [opened, setOpened] = useState(false)
  return (
    <HamburgerButton
      {...args}
      opened={opened}
      onClick={() => setOpened(!opened)}
    >
      {args.value}
    </HamburgerButton>
  )
}
