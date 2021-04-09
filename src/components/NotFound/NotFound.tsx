import Text from 'atoms/Text'
import { FC } from 'react'
import { Head } from 'next/document'

const NotFound: FC = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Text>404 Not Found</Text>
    </>
  )
}
export default NotFound
