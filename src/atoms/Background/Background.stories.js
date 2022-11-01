import Background from './Background.tsx'
import styled from 'styled-components'

export default {
  title: 'Background',
  component: Background,
}
const Container = styled.div`
  width: 1920px;
  height: 934px;
`
export const BackgroundStory = () => (
  <Container>
    <Background />
  </Container>
)
