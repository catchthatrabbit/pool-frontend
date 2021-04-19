import Text from 'atoms/Text'
import { FC } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const ContentStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 200px 100px;
`

const NotFound: FC = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <ContentStyled>
        <Text size="ultra-large">404 Not Found</Text>
      </ContentStyled>
    </>
  )
}
export default NotFound
