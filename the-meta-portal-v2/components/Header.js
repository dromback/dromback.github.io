import { ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar, AvatarGroup, Box, Button, Center, Flex, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";



export default function Header() {
    const {user, isAuthenticated, authenticate, logout, isLoggingOut } = useMoralis();
    
    const Logo = 'https://static.wixstatic.com/media/3e1ac7_eb373f0c866f45a3bbdd48188ef4c8b6~mv2.png/v1/crop/x_0,y_1381,w_5000,h_2190/fill/w_210,h_92,al_c,q_85,usm_0.66_1.00_0.01/Original.webp'

  
    if(!isAuthenticated){
        return(
            <header>
                <Flex px="15" py="7" justifyContent="space-between" bg="#121212" color="white">
                    <Center>
                        <Box as="a" href="/">
                            <Image src={Logo} href='/' objectFit="cover" alt="logo"/>
                        </Box>
                    </Center>
                    <Center>
                        <Link mr="5" href="/"  _hover={{color: "#121212"}}>Home</Link>                    
                        <Link mr="5" href="/metaverses">Metaverses</Link>
                        <Link mr="5" href="/marketplaces">Marketplaces</Link>
                        <Link mr="20" href="/about">About</Link>
                        
                            <Button ml="4" colorScheme="orange"  
                                onClick={() => authenticate({
                                signingMessage: "Sign to login to The Meta Portal"
                                })} >Login
                            </Button>
                    </Center>
                </Flex>
            </header>
        )
    }

        return(
            <header>
                <Flex px="15" py="1" justifyContent="space-between" bg="#121212" color="white">
                    <Center>
                        <Box as="a" href="/">
                            <Image src={Logo} href='/' objectFit="cover" alt="logo"/>
                        </Box>
                    </Center>
                    <Center>
                        <Link mr="5" href="/" _hover={{color: "orange.400"}}>Home</Link>                    
                        <Link mr="5" href="/metaverses" _hover={{color: "orange.400"}}>Metaverses</Link>
                        <Link mr="5" href="/marketplaces" _hover={{color: "orange.400"}}>Marketplaces</Link>
                        <Link mr="20" href="/about" _hover={{color: "orange.400"}}>About</Link>
                        <Menu>
                            <MenuButton mr="7" >
                                <AvatarGroup spacing='1rem'>
                                    <Avatar name={user.attributes.username} borderColor='orange.400' bg="orange.400" />                                
                                        <Text color="orange.400" >
                                            {user.getUsername()} <ChevronDownIcon />
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