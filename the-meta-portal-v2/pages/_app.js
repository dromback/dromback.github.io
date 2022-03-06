import { ChakraProvider } from '@chakra-ui/react'
import { MoralisProvider } from 'react-moralis'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MoralisProvider appId={process.env.NEXT_PUBLIC_APPID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </MoralisProvider>
    </ChakraProvider>
  )
}

export default MyApp