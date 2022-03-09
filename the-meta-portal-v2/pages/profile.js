import { Box, Button, Flex, FormControl, FormLabel, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import Balance from "../components/Balance";
import CustomContainer from "../components/CustomContainer";
import Header from "../components/Header";



export default function Profile() {
    const [input, setInput] = useState('')
    const {user, isAuthenticated, setUserData, isUserUpdating} = useMoralis()
 

    
    if(!isAuthenticated){
        return(
            <>
              <Flex direction="column" width="100vw" height="100vh">
                <Header />
                <Box flex="1" bg="#242323" px="44" py="20" >
                  <CustomContainer>
                    <Text fontSize="40" fontWeight="bold" align="center" color="white">Error: Please login to view Profile.</Text>
                  </CustomContainer>
                </Box>
              </Flex>
            </>
        )
        
    }
  
    return(
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
                <CustomContainer>
                    <Text><b>Username: </b> {user.getUsername()} </Text>
                    <Text><b>Wallet Address: </b> {user.get('ethAddress')} </Text>
                    <form onSubmit={e => {
                        e.preventDefault()
                        if(input.trim() !== '') {
                            setUserData({
                                username: input,
                            }).then(() => setInput(''))
                        }
                    }}>
                        <FormControl mt="6" mb="6">
                            <FormLabel htmlFor="username">Set a new username:</FormLabel>
                            <Input id="username" type="text" placeholder="New Username" value={input} onChange={e => setInput(e.target.value)} />
                        </FormControl>
                        <Button type="submit" colorScheme="orange" disabled={isUserUpdating} mt="3">Save Settings</Button>
                    </form>
                </CustomContainer> 
                </TabPanel>
                <TabPanel>
                  <Balance />
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
}