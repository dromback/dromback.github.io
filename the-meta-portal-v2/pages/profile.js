import { Box, Container, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Account from "../components/account";
import Balance from "../components/Balance";
import Header from "../components/Header";



export default function Profile() {
    
    const {user, isAuthenticated} = useMoralis();


      
    
    if(!isAuthenticated ){
      return(
        <Flex direction="column" maxW="100vw" minH="100vh" >
          <Header />
          <Box flex="1"  px="0" py="11em" >
                    <Container bg="#121212" rounded="lg" fontSize="24px" position="relative" align="center" top="100px">
                        <Box>
                            {/* <meta httpEquiv="refresh" content="1; url='/'"/> */}
                            <Text color="white" py="5" >Error: You are already logged in.</Text>
                            <Text color="white" py="5">You will be redirected shortly.</Text>
                            <Text color="white" py="5">Please go back... before it&#39;s too late!</Text>
                        </Box>
                    </Container>
                </Box>
                </Flex>
        )
        
    }
    
    return(
      <>
        <title>The Meta Portal | Profile</title>
        <Flex direction="column" maxW="100vw" minH="100vh" >
          <Header />
          <Box flex="1"  px="0" py="11em" >
            <Tabs size="lg" mx="auto" colorScheme="orange" color="white" w="50vw" >
              <TabList>
                <Tab fontWeight="bold">Account</Tab>
                <Tab fontWeight="bold">Favorites</Tab>
                <Tab fontWeight="bold">Balance</Tab>
                <Tab fontWeight="bold">Transactions</Tab>
                <Tab fontWeight="bold">NFTs</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Account />
                </TabPanel>
                <TabPanel>
                  {/* <Favorites /> */}
                </TabPanel>
                <TabPanel>
                  {user.get('ethAddress') ? <Balance /> : ''}
                </TabPanel>
                <TabPanel>
                  {/* {user.get('ethAddress') ? <Transactions user={user}/> : ''} */}
                </TabPanel>
                <TabPanel>
                  {/* {user.get('ethAddress') ? <NFTs user={user}/> : ''} */}
                </TabPanel>
              </TabPanels>
            </Tabs>
            </Box>
        </Flex>
      </>
  )
}