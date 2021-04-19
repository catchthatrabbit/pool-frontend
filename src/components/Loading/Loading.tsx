import Text from 'atoms/Text'
import styled, { keyframes } from 'styled-components'

const dots = keyframes`
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0,0,0,0);}
  80%, 100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;
      }
`
const ContentStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 200px 100px;
  text:after {
    content: ' .';
    animation: ${dots} 1s steps(5, end) infinite;
  }
`

const Loading = () => {
  return (
    <ContentStyled>
      <Text size="ultra-large">Loading</Text>
    </ContentStyled>
  )
}

export default Loading
