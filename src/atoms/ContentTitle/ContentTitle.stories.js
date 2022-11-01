import { StartMiningIcon } from 'atoms/icons'
import ContentTitle from './ContentTitle.tsx'

export default {
  title: 'ContentTitle',
  component: ContentTitle,
  argTypes: {
    Image: {
      control: 'ReactNode',
    },
    value: {
      control: 'text',
    },
  },
}

export const ContentTitleBasic = (args) => (
  <ContentTitle {...args}>{args.value}</ContentTitle>
)

ContentTitleBasic.args = {
  value: 'Lorem ipsum dolor sit amet',
  Image: <StartMiningIcon />,
}
