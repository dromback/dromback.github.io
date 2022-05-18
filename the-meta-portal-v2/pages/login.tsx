import { Box, Button, Container, Flex, Input, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Moralis from "moralis";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";



const Login = () => {

    const {login, isAuthenticated} = useMoralis()
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');   

    const pageBg = useColorModeValue('gray.200', '#242323')
    const color = useColorModeValue('black', 'white')
    const bg = useColorModeValue('#FFFFFF', '#121212')
    

    if(!isAuthenticated ){
        return (
        <><>
            <title>The Meta Portal | Login</title>
            <Flex direction="column" maxW="100vw" minH="100vh" bg={pageBg} >
                <Header />
                <Box flex="1" bg={pageBg} mx="auto" py="11em" >
                    <Stack maxW="425px" spacing="3" >
                        <Input color={color} borderColor={color} placeholder="Email" _placeholder={{color: color}} _focus={{border: "1px"}} 
                            value={email} onChange={event => setEmail(event.currentTarget.value)} w="25em"
                        />
                        <Input color={color} borderColor={color} placeholder="Password" type="password" _placeholder={{color: color}} _focus={{border: "1px"}}
                            value={password} onChange={event => setPassword(event.currentTarget.value)} w="25em"
                        />
                        <Button bg="orange.400" w="25em" _hover={{bg: "orange.500"}} onClick={() => login(email, password)}>Log In</Button>
                    </Stack>
                </Box>
                
            </Flex>
        </>
        
        </>
);}

    return(
        <Flex direction="column" maxW="100vw" minH="100vh" bg={pageBg} >
                <Header />
          <Box flex="1"  px="0" py="11em" >
                    <Container bg={bg} rounded="lg" fontSize="1.5em" align="center">
                        <Box>
                            <meta httpEquiv="refresh" content="1; url='/'"/>
                            <Text color={color} py="5" >Error: You are already logged in.</Text>
                            <Text color={color} py="5">You will be redirected shortly.</Text>
                            <Text color={color} py="5">Please go back... before it&#39;s too late!</Text>
                        </Box>
                    </Container>
                </Box>
                </Flex>
        )

  
}

export default Login;