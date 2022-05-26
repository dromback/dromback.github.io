import { ChakraProvider } from '@chakra-ui/react'
import { MoralisProvider } from 'react-moralis'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import customTheme from '../styles/theme'
import { RecoilRoot} from 'recoil'
import Layout from '../components/Layout/Layout'
import * as ga from '../lib/google-analytics'




function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`} strategy='afterInteractive' />
      <Script id="google-analytics" strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
        `}
      </Script>
    <RecoilRoot>
      <ChakraProvider theme={customTheme}>
        <MoralisProvider appId={process.env.NEXT_PUBLIC_APPID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MoralisProvider>
      </ChakraProvider>
    </RecoilRoot>
    </>
  )
}

export default MyApp