import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useMoralis } from "react-moralis"
//import Balance from "../components/Balance";
import Header from "../components/Header";
//import NFTs from "../components/NFTs";
//import Profile from "../components/Profile";
//import Transactions from "../components/Transactions";




export default function Home() {
   const {isAuthenticated, authenticate, user, logout, isLoggingOut } = useMoralis();
  
  
 
    return (
      <>
        <Flex direction="column" width="100vw" height="100vh">
          <Header />
          <Box flex="1" bg="#242323" px="44" py="20" >
            <Tabs size="lg" colorScheme="orange" color="white" >
              <TabList>
                <Tab fontWeight="bold">Profile</Tab>
                <Tab fontWeight="bold">Balance</Tab>
                <Tab fontWeight="bold">Transactions</Tab>
                <Tab fontWeight="bold">NFTs</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {/* <Profile user={user}/> */}
                </TabPanel>
                <TabPanel>
                  {/* <Balance user={user}/> */}
                </TabPanel>
                <TabPanel>
                  {/* <Transactions user={user}/> */}
                </TabPanel>
                <TabPanel>
                  {/* <NFTs user={user}/> */}
                </TabPanel>
              </TabPanels>
            </Tabs>
            </Box>
        </Flex>
      </>
    )
  // }

  // return(
  //   <div>
  //   <Text>Hello test</Text>
  //   </div>
  // )
}
