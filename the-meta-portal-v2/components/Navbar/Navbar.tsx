import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
    Box, Flex, IconButton, Image, Link, Text, useColorModeValue
} from "@chakra-ui/react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../atoms/authModalAtom";
import { auth } from "../../firebase/clientApp";
import useDirectory from "../../hooks/useDirectory";
import DarkModeSwitch from "../DarkModeSwitch";
import Directory from "./Directory/Directory";
import RightContent from "./RightContent/RightContent";




export default function Header() {

    const [user] = useAuthState(auth);
    console.log(user)
    const { onSelectMenuItem } = useDirectory();

    const [display, changeDisplay] = useState('none')

    const bg = useColorModeValue('#FFFFFF', '#121212')
    const color = useColorModeValue('black', 'white')
    const Logo = useColorModeValue('https://i.ibb.co/Qc8ZwmV/Intervrs-Logo-White.png', 'https://i.ibb.co/QfGFcyX/Intervrs-Logo.png')
    const buttonBg = useColorModeValue('blue.400', 'blue.400')


    const setAuthModalState = useSetRecoilState(authModalState);


    return (

        <header>
            <Flex position="fixed" bg={bg} w="100%" zIndex={2} >
                <Box as="a" href="/"  >
                    <Image src={Logo} alt="logo" h='93px'  />
                </Box>
                <Flex position="fixed" top="1rem" right="1rem" align="center"   >
                    {/* Desktop */}
                    <Flex display={['none', 'none', 'flex', 'flex']} >
                        <Link href="/" color={color} aria-label="Home" my="5" mx="3" _focus={{}} _hover={{ color: "blue.400" }}>Home</Link>
                        <Link href="/feed" color={color} aria-label="feed" my="5" mx="3" _focus={{}} _hover={{ color: "blue.400" }}>Feed</Link>
                        <Link href="/metaverses" color={color} aria-label="metaverses" my="5" mx="3" _focus={{}} _hover={{ color: "blue.400" }}>Metaverses</Link>
                        <Link href="/about" color={color} aria-label="about" my="5" mx="3" _focus={{}} _hover={{ color: "blue.400" }}>About</Link>
                        {/* {user && <Directory />} */}
                        <DarkModeSwitch />
                        <RightContent user={user} />
                        

                    </Flex>

                    {/* Mobile */}
                    <IconButton aria-label="Open Menu" size="lg" mr={2} variant="outline" borderColor={buttonBg} color={color}
                        icon={<HamburgerIcon />} onClick={() => changeDisplay('flex')} display={['flex', 'flex', 'none', 'none']}
                    />

                </Flex>

                {/* Mobile Content */}
                <Flex w='100vw' display={display} bgColor="gray.50" zIndex={20} h="100vh"
                    pos="fixed" top="0" left="0" overflowY="auto" flexDir="column" bg={bg}
                >
                    <Flex justify="flex-end">
                        <IconButton mt={2} mr={2} aria-label="Open Menu" size="lg"
                            icon={<CloseIcon />} onClick={() => changeDisplay('none')}
                        />
                    </Flex>

                    <Flex flexDir="column" align="center" mx='auto' justify='center' >
                        <Link href="/" bg={bg} color={color} _focus={{}} _hover={{ color: "blue.400", bg: bg }} aria-label="Home" my={5} w="100%">
                            Home
                        </Link>
                        <Link href="/feed" bg={bg} color={color} _focus={{}} _hover={{ color: "blue.400", bg: bg }} aria-label="Feed" my={5} w="100%">
                            Feed
                        </Link>
                        <Link href="/metaverses" bg={bg} color={color} _focus={{}} _hover={{ color: "blue.400", bg: bg }} aria-label="Metaverses" my={5} w="100%">
                            Metaverses
                        </Link>
                        <Link href="/about" bg={bg} color={color} _focus={{}} _hover={{ color: "blue.400", bg: bg }} aria-label="About" my={5} mb={10} w="100%">
                            About
                        </Link>
                        {/* Login / Signup */}
                        <Flex align='center'>
                            <DarkModeSwitch /> <Text>Light/Dark Mode Toggle</Text>
                        </Flex>
                        <RightContent user={user}/>
                    </Flex>
                </Flex>
            </Flex>
        </header>
    )


    

}