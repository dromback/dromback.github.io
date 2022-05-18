import { Box, Button, Container, Flex, Input, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";



const Signup = () => {

         
        const {user, signup, isAuthenticated} = useMoralis()
        const [username, setUsername] = useState(user && user.attributes.username);
        const [email, setEmail] = useState(user && user.attributes.email);
        const [password, setPassword] = useState('');

        const pageBg = useColorModeValue('gray.200', '#242323')
        const color = useColorModeValue('black', 'white')
        const bg = useColorModeValue('#FFFFFF', '#121212')

        useEffect(() =>{
            if(!user) return null;
            setUsername(user.getUsername())
            setEmail(user.getEmail())
          }, [user])

        if(!isAuthenticated ){
            return (
            <><>
                <title>The Meta Portal | Signup</title>
                <Flex direction="column" maxW="100vw" minH="100vh" bg={pageBg} >
                    <Header />
                    <Box flex="1" py="11em" mx="auto" >
                        <Stack maxW="425px" spacing="3" >
                            <Input minLength="3" maxLength="30" color={color} borderColor={color} placeholder="Email" _placeholder={{color: color}} _focus={{border: "1px"}} 
                                value={email} onChange={event => setEmail(event.currentTarget.value)} w="25em"
                            />
                            <Input minLength="8" maxLength="30" color={color} borderColor={color} placeholder="Password" type="password" _placeholder={{color: color}} 
                            _focus={{border: "1px"}} value={password} onChange={event => setPassword(event.currentTarget.value)} w="25em"
                            />
                            <Button bg="orange.400" w="25em" _hover={{bg: "orange.500"}} onClick={() => signup(email, password, email)}>Sign Up</Button>
                        </Stack>
                    </Box>
                    
                </Flex>
            </>
            
            </>
    );}
    
    if(user && isAuthenticated){
        return(
            <Flex direction="column" maxW="100vw" minH="100vh" bg={pageBg} >
                <Header />
                <Box flex="1"  px="0" py="11em" >
                    <Container bg={bg} rounded="lg" fontSize="1.5em" align="center" >
                        <Box >
                            <meta httpEquiv="refresh" content="1; url='/'"/>
                            <Text color={color} py="5" >Redirecting back home</Text>
                            
                        </Box>
                    </Container>
                </Box>
            </Flex>
        )
        }
        return(
            <Flex direction="column" maxW="100vw" minH="100vh" bg={pageBg} >
                <Header />
                <Box flex="1"  px="0" py="11em" >
                    <Container bg={bg} rounded="lg" fontSize="1.5em" align="center" >
                        <Box >
                            <meta httpEquiv="refresh" content="1; url='/'"/>
                        </Box>
                    </Container>
                </Box>
            </Flex>
        )
}

export default Signup;