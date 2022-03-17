import { Box, Button, Container, Flex, Input, Stack, Text } from "@chakra-ui/react";
import Moralis from "moralis";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";



const Login = () => {

    const {login, isAuthenticated} = useMoralis()
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');   

    
    

    if(!isAuthenticated ){
        return (
        <><>
            <title>The Meta Portal | Login</title>
            <Flex direction="column" width="100vw" height="100vh">
                <Header />
                <Box flex="1" bg="#242323" px="44" py="20" >
                    <Stack maxW="425px" spacing="3" position="relative" left="600px">
                        <Input color="white" placeholder="Email" _placeholder={{color: "white"}} _focus={{border: "1px"}} 
                            value={email} onChange={event => setEmail(event.currentTarget.value)} w="400px"
                        />
                        <Input color="white" placeholder="Password" type="password" _placeholder={{color: "white"}} _focus={{border: "1px"}}
                            value={password} onChange={event => setPassword(event.currentTarget.value)} w="400px"
                        />
                        <Button bg="orange.400" w="400px" _hover={{bg: "orange.500"}} onClick={() => login(email, password)}>Log In</Button>
                    </Stack>
                </Box>
                
            </Flex>
        </>
        
        </>
);}

    return(
        <Flex direction="column" width="100vw" height="100vh">
            <Header />
                <Box flex="1" bg="#242323" px="44" py="20" >
                    <Container bg="#121212" rounded="lg" fontSize="24px" position="relative" align="center" top="100px">
                        <Box>
                            <meta httpEquiv="refresh" content="1; url='/'"/>
                            <Text color="white" py="5" >Error: You are already logged in.</Text>
                            <Text color="white" py="5">You will be redirected shortly.</Text>
                            <Text color="white" py="5">Please go back... before it&#39;s too late!</Text>
                        </Box>
                    </Container>
                </Box>
                </Flex>
        )

  
}

export default Login;