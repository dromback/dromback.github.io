
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import Trending from "../components/Trending";
import Search from "../components/Search";
import Head from "next/head";




export const pageview = (url) => {
  // @ts-expect-error
  window.gtag('config', process.env.NEXT_PUBLIC_MEASUREMENT_ID, {
      path_url: url,
  })
}

export default function Home() {

    const pageBg = useColorModeValue('gray.200', '#242323')

    return(
      <>
        <html lang="en">
        <Head >
          <title>Intervrs - Jump into the metaverse</title>
          <meta name="description" content="Your one-stop shop for everything metaverse; made for and by the user."></meta>
          <meta name="robots" content="all" />
          <meta property="og:title" content="Intervrs - Jump into the metaverse" />
          <meta name="theme-color" content="#121212"/>
          <meta
            property="og:description"
            content="Your one-stop shop for everything metaverse; made for and by the user."
          />
          <meta
            property="og:image"
            content="https://i.ibb.co/NK4D5QS/Logo-header.png"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Flex direction="column" maxW="100vw" minH="100vh" bg={pageBg} >
            
              <Box flex="1" px="0" py="11em" >
                {/* Search Bar */}
                <Search />
                
                {/* Trending Metas */}
                <Trending />
              </Box>
            
        </Flex>
        </html>
      </>
    )

}
