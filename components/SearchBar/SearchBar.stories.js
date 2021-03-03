import React from 'react';
import SearchBar from './SearchBar.tsx';

export default {
  title: 'SearchBar',
  component: SearchBar,
  argTypes: {
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    onChange: { action: 'clicked' },
    onSearch: { action: 'clicked' },
  },
};

export const SearchBarStory = (args) => (
  <SearchBar {...args} />
);

SearchBarStory.args = {
  value: 'Test',
};
