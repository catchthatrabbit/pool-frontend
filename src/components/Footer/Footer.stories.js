
import Footer from './Footer.tsx'
import styled from 'styled-components'

export default {
  title: 'Footer',
  component: Footer,
}

const Container = styled.div`
  width: 1920px;
  height: 1500px;
`

export const FooterBasic = () => (
  <Container>
    <Footer />
  </Container>
)
