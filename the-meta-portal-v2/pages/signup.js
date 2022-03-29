import { Box, Button, Container, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";



const Signup = () => {

         
        const {user, signup, isAuthenticated} = useMoralis()
        const [username, setUsername] = useState(user && user.attributes.username);
        const [email, setEmail] = useState(user && user.attributes.email);
        const [password, setPassword] = useState('');

        useEffect(() =>{
            if(!user) return null;
            setUsername(user.getUsername())
            setEmail(user.getEmail())
          }, [user])

        if(!isAuthenticated ){
            return (
            <><>
                <title>The Meta Portal | Signup</title>
                <Flex direction="column" maxW="100vw" minH="100vh" >
                    <Header />
                    <Box flex="1"  px="0" py="11em" >
                        <Stack maxW="425px" spacing="3" position="relative" left="600px">
                            <Input minlength="3" maxlength="20" color="white" placeholder="Email" _placeholder={{color: "white"}} _focus={{border: "1px"}} 
                                value={email} onChange={event => setEmail(event.currentTarget.value)} w="400px"
                            />
                            <Input minlength="8" maxlength="24" color="white" placeholder="Password" type="password" _placeholder={{color: "white"}} _focus={{border: "1px"}}
                                value={password} onChange={event => setPassword(event.currentTarget.value)} w="400px"
                            />
                            <Button bg="orange.400" w="400px" _hover={{bg: "orange.500"}} onClick={() => signup(email, password, email)}>Sign Up</Button>
                        </Stack>
                    </Box>
                    
                </Flex>
            </>
            
            </>
    );}
    
    if(user && isAuthenticated){
        return(
            <Flex direction="column" maxW="100vw" minH="100vh" >
                <Header />
                <Box flex="1"  px="0" py="11em" >
                    <Container bg="#121212" rounded="lg" fontSize="24px" position="relative" align="center" top="100px">
                        <Box >
                            <meta httpEquiv="refresh" content="1; url='/'"/>
                            <Text color="white" py="5" >Redirecting back home</Text>
                            
                        </Box>
                    </Container>
                </Box>
                </Flex>
        )
        }
        return(
            <Flex direction="column" maxW="100vw" minH="100vh" >
                <Header />
                <Box flex="1"  px="0" py="11em" >
                    <Container bg="#121212" rounded="lg" fontSize="24px" position="relative" align="center" top="100px">
                        <Box >
                            <meta httpEquiv="refresh" content="1; url='/'"/>
                        </Box>
                    </Container>
                </Box>
                </Flex>
        )
}

export default Signup;