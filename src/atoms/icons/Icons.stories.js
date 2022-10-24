import * as icons from './index'
import styled from 'styled-components'

export default {
  title: 'Icons',
}

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
  justify-content: center;
`

const Text = styled.span`
  font-family: sans-serif;
  font-size: 18px;
  display: block;
  margin-top: 10px;
  color: white;
`

export const IconStory = (args) => {
  return (
    <MainContainer {...args}>
      {Object.entries(icons).map(([name, Icon]) => (
        <Container>
          <Icon />
          <Text>{name}</Text>
        </Container>
      ))}
    </MainContainer>
  )
}
