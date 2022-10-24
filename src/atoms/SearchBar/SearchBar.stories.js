import { useEffect, useState } from 'react'
import SearchBar from './SearchBar.tsx'
import styled from 'styled-components'

export default {
  title: 'SearchBar',
  component: SearchBar,
  argTypes: {
    placeholder: {
      control: 'text',
    },
    onChange: { action: 'clicked' },
    onSearch: { action: 'clicked' },
  },
}

const Container = styled.div`
  width: 80%;
`

export const SearchBarStory = (args) => {
  const [text, setText] = useState()

  useEffect(() => {
    setText(args.Text)
  }, [args.Text])

  return (
    <Container>
      <SearchBar
        {...args}
        onChange={(t) => setText(t.target.value)}
        value={text}
      />
    </Container>
  )
}

SearchBarStory.args = {
  Text: 'Search query',
}
