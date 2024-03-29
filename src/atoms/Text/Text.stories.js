import Text from './Text.tsx'

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [
          'tiny',
          'small',
          'medium',
          'large',
          'very-large',
          'ultra-large',
        ],
      },
    },
    fontFamily: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['white', 'apple', 'santasGray'],
      },
    },
    italic: {
      control: {
        type: 'boolean',
      },
    },
    active: {
      control: {
        type: 'boolean',
      },
    },
    fontWeight: {
      control: {
        type: 'select',
        options: ['bold', 'normal', 'light'],
      },
    },
    value: {
      control: 'text',
    },
  },
}

export const TextStory = (args) => <Text {...args}>{args.value}</Text>

TextStory.args = {
  value: 'Lorem ipsum dolor sit amet',
  size: 'large',
  fontFamily: 'primary',
  color: 'white',
  italic: false,
  active: false,
  fontWeight: 'normal',
}
