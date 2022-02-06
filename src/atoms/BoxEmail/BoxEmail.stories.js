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
  value: 'In case you have any question, please contact us.',
  title: 'Contact',
  email: 'contact@catchthatrabbit.com',
}
