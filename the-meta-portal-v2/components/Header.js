import { ChevronDownIcon } from "@chakra-ui/icons";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Avatar, AvatarGroup, Box, Center, CloseButton, Flex, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import Moralis from "moralis";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";



export default function Header() {
    const {user, isAuthenticated, authenticate, isAuthenticating, logout, authError, isLoggingOut } = useMoralis();
    
    const Logo = 'https://i.ibb.co/NK4D5QS/Logo-header.png'

    const [username, setUsername] = useState(user && user.attributes.username);
    const [email, setEmail] = useState(user && user.attributes.email);
    const [password, setPassword] = useState('');
    
    useEffect(() =>{
        if(!user) return null;
        setUsername(user.getUsername())
        setEmail(user.getEmail())
      }, [user])
  
    if(!isAuthenticated){
        return(
            <header>
                <Flex px="15" py="1"  bg="#121212" color="white">
                    <Center>
                        <Box as="a" href="/">
                            <Image src={Logo} href='/' objectFit="cover" alt="logo"/>
                        </Box>
                    </Center>
                    <Center position="relative" left="1140px">
                        <Link mr="5" href="/"  _focus={{border: "orange.400"}} _hover={{color: "orange.400"}}>Home</Link>                    
                        <Link mr="5" href="/metaverses" _hover={{color: "orange.400"}}>Metaverses</Link>
                        <Link mr="5" href="/marketplaces" _hover={{color: "orange.400"}}>Marketplaces</Link>
                        <Link mr="5" href="/about" _hover={{color: "orange.400"}}>About</Link>
                        
                            
                            
                            {/* Login / Signup */}
                            <Menu>
                                <MenuButton ml="10" textAlign="right" >
                                    <Text color="orange.400" >
                                        Login / Signup <ChevronDownIcon />
                                    </Text>                                     
                                </MenuButton>
                                <MenuList bg="#121212">
                                    <MenuItem as="a" href="/signup" color="white" _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}
                                    >Sign Up</MenuItem>
                                    <MenuItem as="button" color="white" _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}
                                        isLoading={isAuthenticating} onClick={ () => authenticate({
                                        signingMessage: "Sign to login to The Meta Portal"})} >
                                            Login with wallet
                                        </MenuItem>
                                    <MenuItem as="a" href="/login" color="white" _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}>
                                        Login with credentials
                                    </MenuItem>
                                </MenuList>
                            </Menu>

                    </Center>
                    
                    
                    {authError && <Alert status='error' w="300px" position="relative" top="100px" left="830px">
                        <AlertIcon />
                        <Box flex='1'>
                            <AlertTitle>Authentication Failed.</AlertTitle>
                            <AlertDescription display='block'>
                                {authError.message}
                            </AlertDescription>
                        </Box>
                        <CloseButton position='absolute' right='8px' top='8px' />
                    </Alert>}
                    

                </Flex>
            </header>
 
        )
    }

        return(
            <header>
                <Flex px="15" py="1" bg="#121212" color="white">
                    <Center>
                        <Box as="a" href="/">
                            <Image src={Logo} href='/' objectFit="cover" alt="logo"/>
                        </Box>
                    </Center>
                    <Center position="relative" right="-1060px">
                        <Link mr="5" href="/" _focus={{}} _hover={{color: "orange.400"}}>Home</Link>                    
                        <Link mr="5" href="/metaverses" _focus={{}} _hover={{color: "orange.400"}}>Metaverses</Link>
                        <Link mr="5" href="/marketplaces" _focus={{}} _hover={{color: "orange.400"}}>Marketplaces</Link>
                        <Link mr="5" href="/about" _focus={{}} _hover={{color: "orange.400"}}>About</Link>
                        <Menu>
                            <MenuButton ml="5"  >
                                <AvatarGroup spacing='1rem' >
                                    <Avatar name={Moralis.User.current().attributes.username} borderColor='orange.400' bg="orange.400" />                                
                                        <Text color="orange.400" >
                                            {Moralis.User.current().attributes.username} <ChevronDownIcon />
                                        </Text>
                                    </AvatarGroup>
                            </MenuButton>
                            <MenuList bg="#121212">
                                <MenuItem as="a" href="/profile" color="white" _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}
                                >Profile</MenuItem>
                                <MenuItem color="white" _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}
                                 onClick={logout} disabled={isLoggingOut}>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    </Center>
                </Flex>
            </header>
        )
    
}