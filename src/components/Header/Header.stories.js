
import styled from 'styled-components'
import Header from './Header'

export default {
  title: 'Header',
  component: Header,
}

const Container = styled.div`
  width: 1920px;
  height: 1500px;
`

export const HeaderBasic = (args) => (
  <Container>
    <Header {...args} />
  </Container>
)

HeaderBasic.story = {
  parameters: {
    nextRouter: {
      path: '/',
      asPath: '/',
    },
  },
}
