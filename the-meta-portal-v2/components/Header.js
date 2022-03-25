import { ChevronDownIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Avatar, AvatarGroup, Box, Button, CloseButton, Flex, HStack, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import Moralis from "moralis";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";




export default function Header() {
    const {user, isAuthenticated, authenticate, isAuthenticating, logout, authError, isLoggingOut } = useMoralis();
    
    const Logo = 'https://i.ibb.co/NK4D5QS/Logo-header.png'

    const [username, setUsername] = useState(user && user.attributes.username);
    const [email, setEmail] = useState(user && user.attributes.email);
    const [password, setPassword] = useState('');

    const [display, changeDisplay] = useState('none')

    
    
    useEffect(() =>{
        if(!user) return null;
        setUsername(user.getUsername())
        setEmail(user.getEmail())
      }, [user])
  
    if(!isAuthenticated){
        return(
            <header>
                <Flex position="fixed" bg="#121212" w="100%" >
                            <Box as="a" href="/" ml="5" >
                                <Image src={Logo} href='/' objectFit="cover" alt="logo"/>
                            </Box>
                    <Flex position="fixed" top="1rem" right="1rem" align="center" >
                        {/* Desktop */}
                        <Flex display={['none', 'none', 'flex','flex']} >
                            <Link href="/" color="white" aria-label="Home" my="5" mx="3" _focus={{}} _hover={{color: "orange.400"}}>Home</Link>
                            <Link href="/metaverses" color="white" aria-label="metaverses" my="5" mx="3"  _focus={{}} _hover={{color: "orange.400"}}>Metaverses</Link>
                            <Link href="/marketplaces" color="white" aria-label="marketplaces" my="5" mx="3"  _focus={{}} _hover={{color: "orange.400"}}>Marketplaces</Link>
                            <Link href="/about" color="white" aria-label="about" my="5" mx="3"  _focus={{}} _hover={{color: "orange.400"}}>About</Link>
                            {/* Login / Signup */}
                            <Menu>
                                    <MenuButton  ml="1"  >
                                        <Text color="orange.400" mx="5" >
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
                        
                        </Flex>

                        {/* Mobile */}
                        <IconButton aria-label="Open Menu" size="lg" mr={2} variant="outline" borderColor='orange.400' color="orange.400"
                            icon={ <HamburgerIcon /> } onClick={() => changeDisplay('flex')} display={['flex', 'flex', 'none', 'none']}
                        />
                        
                    </Flex>

                    {/* Mobile Content */}
                    <Flex w='100vw' display={display} bgColor="gray.50" zIndex={20} h="100vh"
                        pos="fixed" top="0" left="0" overflowY="auto" flexDir="column" bg="#121212"
                    >
                        <Flex justify="flex-end">
                            <IconButton mt={2} mr={2} aria-label="Open Menu" size="lg"
                                icon={ <CloseIcon /> } onClick={() => changeDisplay('none')}
                            />
                        </Flex>

                        <Flex flexDir="column" align="center"  >
                            <Link href="/">
                                <Button as="a" bg="#121212" color="white" _focus={{}} _hover={{color: "orange.400", bg: "#121212"}} aria-label="Home" my={5} w="100%">
                                    Home</Button>
                            </Link>
                            <Link href="/metaverses">
                                <Button as="a" bg="#121212" color="white" _focus={{}} _hover={{color: "orange.400"}} variant="ghost" aria-label="metaverses" my={5} w="100%">
                                    Metaverses</Button>
                            </Link>
                            <Link href="/marketplaces">
                                <Button as="a" bg="#121212" color="white" _focus={{}} _hover={{color: "orange.400"}} variant="ghost" aria-label="marketplaces" my={5} w="100%">
                                    Marketplaces</Button>
                            </Link>
                            <Link href="/about">
                                <Button as="a" bg="#121212" color="white" _focus={{}} _hover={{color: "orange.400"}} variant="ghost" aria-label="about" my={5} w="100%">
                                    About</Button>
                            </Link>
                            {/* Login / Signup */}
                            <Menu>
                                <MenuButton >
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
                        </Flex>
                    </Flex>
                    
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
            <header >
                
                <Flex position="fixed" bg="#121212" w="100%" >
                            <Box as="a" href="/" ml="5" >
                                <Image src={Logo} href='/' objectFit="cover" alt="logo"/>
                            </Box>
                    <Flex position="fixed" top="1rem" right="1rem" align="center" >
                        
                        {/* Desktop */}
                        <Flex display={['none', 'none', 'flex','flex']} >
                            <Link href="/" color="white" aria-label="Home" my="5" mx="3" _focus={{}} _hover={{color: "orange.400"}}>Home</Link>
                            <Link href="/metaverses" color="white" aria-label="metaverses" my="5" mx="3" _focus={{}} _hover={{color: "orange.400"}}>Metaverses</Link>
                            <Link href="/marketplaces" color="white" aria-label="marketplaces" my="5" mx="3" _focus={{}} _hover={{color: "orange.400"}}>Marketplaces</Link>
                            <Link href="/about" color="white" aria-label="about" my="5" mx="3" _focus={{}} _hover={{color: "orange.400"}}>About</Link>
                            <Menu >
                                <MenuButton ml="5" mx="5" >
                                    <AvatarGroup spacing='1rem' >
                                        <Avatar name={Moralis.User.current().attributes.username} borderColor='orange.400' bg="orange.400"  />                                
                                            <Text color="orange.400"  >
                                                {Moralis.User.current().attributes.username} <ChevronDownIcon />
                                            </Text>
                                    </AvatarGroup>
                                </MenuButton>
                                <MenuList bg="#121212" >
                                    <MenuItem as="a" href="/profile" color="white" _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}
                                    >Profile</MenuItem>
                                    <MenuItem color="white" _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}
                                        onClick={logout} disabled={isLoggingOut}>Logout</MenuItem>
                                    </MenuList>
                            </Menu>
                        
                        </Flex>

                        {/* Mobile */}
                        <IconButton aria-label="Open Menu" size="lg" mr={2} bg="#121212" variant="outline" borderColor='orange.400' color="orange.400"
                            icon={ <HamburgerIcon  /> } onClick={() => changeDisplay('flex')} display={['flex', 'flex', 'none', 'none']}
                        />
                        
                    </Flex>

                    {/* Mobile Content */}
                    <Flex w='100vw' display={display} bgColor="gray.50" zIndex={20} h="100vh"
                        pos="fixed" top="0" left="0" overflowY="auto" flexDir="column" bg="#121212"
                    >
                        <Flex justify="flex-end">
                            <IconButton mt={2} mr={2} aria-label="Open Menu" size="lg"
                                icon={ <CloseIcon /> } onClick={() => changeDisplay('none')}
                            />
                        </Flex>

                        <Flex flexDir="column" align="center"  >
                            <Link href="/">
                                <Button as="a" bg="#121212" color="white" _focus={{}} _hover={{color: "orange.400", bg: "#121212"}} aria-label="Home" my={5} w="100%">
                                    Home</Button>
                            </Link>
                            <Link href="/metaverses">
                                <Button as="a" bg="#121212" color="white" _focus={{}} _hover={{color: "orange.400"}} variant="ghost" aria-label="metaverses" my={5} w="100%">
                                    Metaverses</Button>
                            </Link>
                            <Link href="/marketplaces">
                                <Button as="a" bg="#121212" color="white" _focus={{}} _hover={{color: "orange.400"}} variant="ghost" aria-label="marketplaces" my={5} w="100%">
                                    Marketplaces</Button>
                            </Link>
                            <Link href="/about">
                                <Button as="a" bg="#121212" color="white" _focus={{}} _hover={{color: "orange.400"}} variant="ghost" aria-label="about" my={5} w="100%">
                                    About</Button>
                            </Link>
                            <Menu>
                            <MenuButton ml="5" mr="5" >
                                <AvatarGroup spacing='1rem' >
                                    <Avatar name={Moralis.User.current().attributes.username} borderColor='orange.400' bg="orange.400"  />                                
                                        <Text color="orange.400" w="20">
                                            {Moralis.User.current().attributes.username} <ChevronDownIcon />
                                        </Text>
                                </AvatarGroup>
                            </MenuButton>
                            <MenuList bg="#121212" >
                                <MenuItem as="a" href="/profile" color="white" _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}
                                >Profile</MenuItem>
                                <MenuItem color="white" _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}
                                    onClick={logout} disabled={isLoggingOut}>Logout</MenuItem>
                                </MenuList>
                        </Menu>
                        </Flex>
                    </Flex>
                </Flex>
                
            </header>
        )
    
}