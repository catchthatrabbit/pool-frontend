import Button from './Button.tsx'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['outline', 'transparent'],
      },
    },
    href: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },
}

export const ButtonStory = (args) => <Button {...args}>{args.value}</Button>

ButtonStory.args = {
  value: 'Connected to US',
}
