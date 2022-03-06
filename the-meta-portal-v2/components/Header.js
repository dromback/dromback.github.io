import { Button, Center, Flex, Image, Link, Text } from "@chakra-ui/react";


export default function Header({user, logout, isLoggingOut}) {

  
    
    return(
        <header>
            <Flex px="15" py="7" justifyContent="space-between" bg="#121212" color="white">
                <Center>
                    <Text fontSize="xl" fontWeight="bold" >The Meta Portal</Text>
                    
                    <Image src='' size="100px" objectFit="cover" alt="logo"/>
                    
                </Center>
                <Center>
                    <Link mr="5" href="/">Home</Link>                    
                    <Link mr="5" href="/metaverses">Metaverses</Link>
                    <Link mr="5" href="/marketplaces">Marketplaces</Link>
                    <Link mr="20" href="/about">About</Link>
                    <Text ml="5">{user.getUsername()}</Text>
                    <Button ml="4" colorScheme="orange"  onClick={logout} disabled={isLoggingOut} >Logout</Button>
                </Center>
            </Flex>
        </header>
    )
}