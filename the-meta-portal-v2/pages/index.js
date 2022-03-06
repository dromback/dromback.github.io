import { Box, Button, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useMoralis } from "react-moralis"
import Balance from "../components/Balance";
import Header from "../components/Header";
import NFTs from "../components/NFTs";
import Profile from "../components/Profile";
import Transactions from "../components/Transactions";



export default function Home() {
  // const {isAuthenticated, authenticate, user, logout, isLoggingOut } = useMoralis();
  // if(!isAuthenticated){
  //   return(
  //     <>
  //       <Head>
  //         <title>Login</title>
  //       </Head>
  //       <Flex direction="column" 
  //       justifyContent="center" 
  //       alignItems="center"
  //       width="100vw"
  //       height="100vh"
  //       bgGradient="linear(to-br, gray.600, gray.900)"
  //       >
  //         <Text fontSize="5xl" fontWeight="bold" color="white">Dashboard</Text>
  //         <Button colorScheme="orange" size="lg" mt="6" 
  //           onClick={() => authenticate({
  //               signingMessage: "Sign to login to The Meta Portal"
  //           })}
  //         >Authenticate with Wallet</Button>
  //       </Flex>
  //     </>

  //   )
    <div>
      <Text>Hello test</Text>
    </div>
  // }
  
  // return (
  //   <>
  //     <Head>
  //         <title>Dashboard</title>
  //     </Head>
  //     <Flex direction="column" width="100vw" height="100vh">
  //       <Header user={user} logout={logout} isLoggingOut={isLoggingOut}/>
  //       <Box flex="1" bg="#242323" px="44" py="20" >
  //         <Tabs size="lg" colorScheme="orange" color="white" >
  //           <TabList>
  //             <Tab fontWeight="bold">Profile</Tab>
  //             <Tab fontWeight="bold">Balance</Tab>
  //             <Tab fontWeight="bold">Transactions</Tab>
  //             <Tab fontWeight="bold">NFTs</Tab>
  //           </TabList>
  //           <TabPanels>
  //             <TabPanel>
  //               <Profile user={user}/>
  //             </TabPanel>
  //             <TabPanel>
  //               <Balance user={user}/>
  //             </TabPanel>
  //             <TabPanel>
  //               <Transactions user={user}/>
  //             </TabPanel>
  //             <TabPanel>
  //               <NFTs user={user}/>
  //             </TabPanel>
  //           </TabPanels>
  //         </Tabs>
  //         </Box>
  //     </Flex>
  //   </>
  // )
}
