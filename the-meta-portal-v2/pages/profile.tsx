import { Box, Container, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Account from "../components/account";
import Balance from "../components/Balance";
import Favorites from "../components/favorites";
import Header from "../components/Header";
import FavoriteData from "../components/FavoriteData";



export default function Profile() {

  const { user, isAuthenticated, Moralis, account } = useMoralis();




  const pageBg = useColorModeValue('gray.200', '#242323')
  const color = useColorModeValue('black', 'white')
  const bg = useColorModeValue('#FFFFFF', '#121212')

  if (!isAuthenticated) {
    return (
      <Flex direction="column" maxW="100vw" minH="100vh" bg={pageBg} >
        
        <Box flex="1" px="0" py="11em" >
          <Container bg={bg} rounded="lg" fontSize="1.5em"  >
            <Box >
              <Text align="center" color={color} py="5" >Error: You must login to view this page.</Text>
              <Text align="center" color={color} py="5">Please go back... before it&#39;s too late!</Text>
            </Box>
          </Container>
        </Box>
      </Flex>
    )

  }

  return (
    <>
      <title>The Meta Portal | Profile</title>
      <Flex direction="column" maxW="100vw" minH="100vh" bg={pageBg} >
        
        <Box flex="1" px="0" py="11em" >
          <Tabs size="lg" mx="auto" colorScheme="orange" color={color} w="50vw" >
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