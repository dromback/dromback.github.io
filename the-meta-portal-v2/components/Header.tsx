import { ChevronDownIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Alert, AlertDescription, AlertIcon, AlertTitle, Avatar, AvatarGroup, Box, CloseButton, 
            Flex, IconButton, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text, useColorMode, 
            ColorModeScript, useColorModeValue } from "@chakra-ui/react";
import Moralis from "moralis";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import DarkModeSwitch from "./DarkModeSwitch"; 





export default function Header() {
    const {user, isAuthenticated, authenticate, isAuthenticating, logout, authError, isLoggingOut, Moralis, account } = useMoralis();

    const [username, setUsername] = useState(user && user.attributes.username);
    const [email, setEmail] = useState(user && user.attributes.email);
    const [password, setPassword] = useState('');


    const [display, changeDisplay] = useState('none')

    const bg = useColorModeValue('#FFFFFF', '#121212')
    const color = useColorModeValue('black', 'white')
    const Logo = useColorModeValue('https://i.ibb.co/QMTqHLy/Logo-header-white.png', 'https://i.ibb.co/8jdLh71/Logo-header.png')
    const buttonBg = useColorModeValue('orange.400', 'orange.400')
    
    useEffect(() =>{
        if(!user) return null;
        setUsername(user.getUsername())
        setEmail(user.getEmail())
      }, [user])
  
    if(!isAuthenticated){
        return(
            
            <header>
                <Flex position="fixed" bg={bg} w="100%" zIndex={2} >
                            <Box as="a" href="/" ml="10" >
                                <Image src={Logo} href='/'  alt="logo"/>
                            </Box>
                    <Flex position="fixed" top="1rem" right="1rem" align="center"   >
                        {/* Desktop */}
                        <Flex display={['none', 'none', 'flex','flex']} >
                            <Link href="/" color={color} aria-label="Home" my="5" mx="3" _focus={{}} _hover={{color: "orange.400"}}>Home</Link>
                            <Link href="/metaverses" color={color} aria-label="metaverses" my="5" mx="3"  _focus={{}} _hover={{color: "orange.400"}}>Metaverses</Link>
                            <Link href="/marketplaces" color={color} aria-label="marketplaces" my="5" mx="3"  _focus={{}} _hover={{color: "orange.400"}}>Marketplaces</Link>
                            <Link href="/about" color={color} aria-label="about" my="5" mx="3"  _focus={{}} _hover={{color: "orange.400"}}>About</Link>
                            <DarkModeSwitch />
                            {/* Login / Signup */}
                            <Menu>
                                    <MenuButton  ml="1"  >
                                        <Text color={color} mx="5" >
                                            Login / Signup <ChevronDownIcon />
                                        </Text>                                     
                                    </MenuButton>
                                    <MenuList bg={bg}>
                                        <MenuItem as="a" href="/signup" color={color} _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}
                                        >Sign Up</MenuItem>
                                        <MenuItem as="button" color={color} _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}
                                            isLoading={isAuthenticating} onClick={ () => authenticate({
                                            signingMessage: "Sign to login to The Meta Portal"})} >
                                                Login with wallet
                                            </MenuItem>
                                        <MenuItem as="a" href="/login" color={color} _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}>
                                            Login with credentials
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                        
                        </Flex>

                        {/* Mobile */}
                        <IconButton aria-label="Open Menu" size="lg" mr={2} variant="outline" borderColor={buttonBg} color={color}
                            icon={ <HamburgerIcon /> } onClick={() => changeDisplay('flex')} display={['flex', 'flex', 'none', 'none']}
                        />
                        
                    </Flex>

                    {/* Mobile Content */}
                    <Flex w='100vw' display={display} bgColor="gray.50" zIndex={20} h="100vh"
                        pos="fixed" top="0" left="0" overflowY="auto" flexDir="column" bg={bg}
                    >
                        <Flex justify="flex-end">
                            <IconButton mt={2} mr={2} aria-label="Open Menu" size="lg"
                                icon={ <CloseIcon /> } onClick={() => changeDisplay('none')}
                            />
                        </Flex>

                        <Flex flexDir="column" align="center"  >
                            <Link href="/" bg={bg} color={color} align="center" _focus={{}} _hover={{color: "orange.400", bg: bg}} aria-label="Home" my={5} w="100%">
                                Home
                            </Link>
                            <Link href="/metaverses" bg={bg} color={color} align="center" _focus={{}} _hover={{color: "orange.400", bg: bg}} aria-label="Metaverses" my={5} w="100%">
                                Metaverses
                            </Link>
                            <Link href="/marketplaces" bg={bg} color={color} align="center" _focus={{}} _hover={{color: "orange.400", bg: bg}} aria-label="Marketplaces" my={5} w="100%">
                                Marketplaces
                            </Link>
                            <Link href="/about" bg={bg} color={color} align="center" _focus={{}} _hover={{color: "orange.400", bg: bg}} aria-label="About" my={5} mb={10} w="100%">
                                About
                            </Link>
                            {/* Login / Signup */}
                            <Menu mt="5">
                                <MenuButton >
                                    <Text color="orange.400" >
                                        Login / Signup <ChevronDownIcon />
                                    </Text>                                     
                                </MenuButton>
                                <MenuList bg={bg}>
                                    <MenuItem as="a" href="/signup" color={color} _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}
                                    >Sign Up</MenuItem>
                                    <MenuItem as="button" color={color} _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}
                                        isLoading={isAuthenticating} onClick={ () => authenticate({
                                        signingMessage: "Sign to login to The Meta Portal"})} >
                                            Login with wallet
                                        </MenuItem>
                                    <MenuItem as="a" href="/login" color={color} _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}>
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
                <Flex position="fixed" bg={bg} w="100%" zIndex={2} >
                            <Box as="a" href="/" ml="10" >
                                <Image src={Logo} href='/'  alt="logo"/>
                            </Box>
                    <Flex position="fixed" top="1rem" right="1rem" align="center" >
                        
                        {/* Desktop */}
                        <Flex color={color} display={['none', 'none', 'flex','flex']} >
                            <Link href="/"  aria-label="Home" my="5" mx="3" _focus={{}} _hover={{color: "orange.400"}}>Home</Link>
                            <Link href="/metaverses"  aria-label="metaverses" my="5" mx="3" _focus={{}} _hover={{color: "orange.400"}}>Metaverses</Link>
                            <Link href="/marketplaces"  aria-label="marketplaces" my="5" mx="3" _focus={{}} _hover={{color: "orange.400"}}>Marketplaces</Link>
                            <Link href="/about"  aria-label="about" my="5" mx="3" _focus={{}} _hover={{color: "orange.400"}}>About</Link>
                            <DarkModeSwitch />
                            <Menu >
                                <MenuButton ml="5" mx="5" >
                                    <AvatarGroup spacing='1rem' >
                                        <Avatar name={Moralis.User.current().attributes.username} borderColor={buttonBg} bg={buttonBg} color={color} />                                
                                            <Text color={color}  >
                                                {Moralis.User.current().attributes.username} <ChevronDownIcon />
                                            </Text>
                                    </AvatarGroup>
                                </MenuButton>
                                <MenuList bg={bg} >
                                    <MenuItem as="a" href="/profile" color={color} _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}
                                    >Profile</MenuItem>
                                    <MenuItem color={color} _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}
                                        onClick={logout} disabled={isLoggingOut}>Logout</MenuItem>
                                    </MenuList>
                            </Menu>
                        
                        </Flex>

                        {/* Mobile */}
                        <IconButton aria-label="Open Menu" size="lg" mr={2} bg={bg} variant="outline" borderColor={buttonBg} color={color}
                            icon={ <HamburgerIcon  /> } onClick={() => changeDisplay('flex')} display={['flex', 'flex', 'none', 'none']}
                        />
                        
                    </Flex>

                    {/* Mobile Content */}
                    <Flex w='100vw' display={display} bgColor="gray.50" zIndex={20} h="100vh"
                        pos="fixed" top="0" left="0" overflowY="auto" flexDir="column" bg={bg}
                    >
                        <Flex justify="flex-end">
                            <IconButton mt={2} mr={2} aria-label="Open Menu" size="lg"
                                icon={ <CloseIcon /> } onClick={() => changeDisplay('none')}
                            />
                        </Flex>

                        <Flex flexDir="column" align="center"  >
                            <Link href="/" bg={bg} color={color} align="center" _focus={{}} _hover={{color: "orange.400", bg: bg}} aria-label="Home" my={5} w="100%">
                                Home
                            </Link>
                            <Link href="/metaverses" bg={bg} color={color} align="center" _focus={{}} _hover={{color: "orange.400", bg: bg}} aria-label="Metaverses" my={5} w="100%">
                                Metaverses
                            </Link>
                            <Link href="/marketplaces" bg={bg} color={color} align="center" _focus={{}} _hover={{color: "orange.400", bg: bg}} aria-label="Marketplaces" my={5} w="100%">
                                Marketplaces
                            </Link>
                            <Link href="/about" bg={bg} color={color} align="center" _focus={{}} _hover={{color: "orange.400", bg: bg}} aria-label="About" my={5} mb={10} w="100%">
                                About
                            </Link>
                            <Menu >
                                <MenuButton >
                                    <AvatarGroup spacing='1rem' >
                                        <Avatar name={Moralis.User.current().attributes.username} borderColor={buttonBg} bg={buttonBg}  />                                
                                            <Text color={color} w="20">
                                                {Moralis.User.current().attributes.username} <ChevronDownIcon />
                                            </Text>
                                    </AvatarGroup>
                                </MenuButton>
                                <MenuList bg={bg} >
                                    <MenuItem as="a" href="/profile" color={color} _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}>
                                        Profile
                                    </MenuItem>
                                    <MenuItem color={color} _hover={{bg: 'orange.400'}} _focus={{bg: 'orange.400'}}
                                        onClick={logout} disabled={isLoggingOut}>
                                            Logout
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                    </Flex>
                </Flex>
            </header>
        )
    
}