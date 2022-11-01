import MapButton from './MapButton.tsx'

export default {
  title: 'MapButton',
  component: MapButton,
  argTypes: {
    href: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },
}

export const MapButtonStory = (args) => (
  <MapButton {...args}>{args.value}</MapButton>
)

MapButtonStory.args = {
  value: 'Test',
}
