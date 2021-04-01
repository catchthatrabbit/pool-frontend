import React from 'react'
import BoxEmail from './BoxEmail.tsx'

export default {
  title: 'BoxEmail',
  component: BoxEmail,
  argTypes: {
    title: {
      control: 'text',
    },
    email: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },
}

export const BoxEmailStory = (args) => (
  <BoxEmail {...args}>{args.value}</BoxEmail>
)

BoxEmailStory.args = {
  value: 'For legal and commercial questions please feel free to email us.',
  title: 'Legal &amp; Commercial',
  email: 'office@catchthatrabbit.com',
}
