import React from 'react';
import Text from './Text.tsx';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: [
          'header-tittle',
          'header-tittle-alt-color',
          'header-sub-text',
          'footer-title',
          'footer-title-alt-color',
          'paragraph-text',
          'table-text',
          'button-text',
          'info-box-number',
          'info-box-second',
          'info-box-third',
          'info-box-fourth',
          'pool-graph-label',
          'pool-graph-centre-date',
          'pool-graph-time-line',
        ],
      },
    },
    value: {
      control: 'text',
    },
  },
};

export const TextStory = (args) => (
  <Text {...args}>
    {args.value}
  </Text>
);

TextStory.args = {
  value: 'Lorem ipsum dolor sit amet',
};
