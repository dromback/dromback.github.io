import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { Head } from "next/head";
import Header from "../components/Header";
import { useMoralis } from "react-moralis";



export default function about(){
    

    return (
        <>
          <Head>
              <title>Dashboard</title>
          </Head>
          <Flex direction="column" width="100vw" height="100vh">
            <Header />
            
          </Flex>
        </>
    )
}