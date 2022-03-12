import { Box, Button, Container, Flex, FormControl, FormLabel, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import Moralis from "moralis";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Balance from "../components/Balance";
import CustomContainer from "../components/CustomContainer";
import Header from "../components/Header";



export default function Profile() {
    const [input, setInput] = useState('')
    const {user, isAuthenticated, setUserData, isUserUpdating} = useMoralis();
    const [username, setUsername] = useState(user && user.attributes.username);
    const [email, setEmail] = useState(user && user.attributes.email);
    const [password, setPassword] = useState('');

      
    useEffect(() =>{
      if(!user) return null;
      setUsername(user.getUsername())
      setEmail(user.getEmail())
    }, [user])

    
    if(!isAuthenticated ){
      return(
        <Flex direction="column" width="100vw" height="100vh">
            <Header />
                <Box flex="1" bg="#242323" px="44" py="20" >
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
                    <Text><b>Username: </b> {Moralis.User.current().attributes.username}
                      </Text>
                    <Text><b>Email: </b> {user.getEmail()} </Text>
                    <Text><b>Wallet Address: </b> {user.get('ethAddress')} </Text>
                    {/* Change Settings */}
                    <form onSubmit={e => {
                        e.preventDefault()
                        if(input.trim() !== '') {
                            setUserData({
                                username: input,
                                email: email,
                                password: password === "" ? undefined : password
                            }).then(() => setInput('')).then(() => setEmail ('')).then(() => setPassword(''))
                        }
                    }}>
                        <FormControl mt="6" mb="6">
                            <FormLabel htmlFor="username">Set a new username:</FormLabel>
                              <Input minlength="3" maxlength="30" id="username" type="text" placeholder="New Username" _placeholder={{color: "white"}} _focus={{border: "1px"}}
                              value={input} onChange={e => setInput(e.target.value)} />
                            <FormLabel mt="6" htmlFor="email">Set your email:</FormLabel >
                              <Input id="email" value={email} minlength="3" maxlength="30" 
                              type="text" placeholder="New Email" _placeholder={{color: "white"}} _focus={{border: "1px"}}
                              onChange={(event) => setEmail(event.currentTarget.value)}  />
                            <FormLabel htmlFor="password" mt="6" >Set your password:</FormLabel>
                              <Input id="password" type="password" placeholder="New Password" _placeholder={{color: "white"}} _focus={{border: "1px"}}
                              value={password} onChange={(event) => setPassword(event.currentTarget.value)}/>
                        </FormControl>
                        
                        <Button type="submit" colorScheme="orange" disabled={isUserUpdating} mt="3" >Save Settings</Button>
                    </form>
                </CustomContainer> 
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