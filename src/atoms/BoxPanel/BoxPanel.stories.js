import React from 'react'
import BoxPanel from './BoxPanel.tsx'

export default {
  title: 'BoxPanel',
  component: BoxPanel,
  argTypes: {
    title: {
      control: 'text',
    },
    desc: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },
}

export const BoxPanelStory = (args) => (
  <BoxPanel {...args}>{args.value}</BoxPanel>
)

BoxPanelStory.args = {
  value: 'Hello dear visitors.',
  title: 'Panel',
  desc: 'Please, look around.',
}
