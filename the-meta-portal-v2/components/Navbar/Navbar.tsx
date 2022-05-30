import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
    Box, Flex, IconButton, Image, Link, useColorModeValue
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
    const Logo = useColorModeValue('https://i.ibb.co/QMTqHLy/Logo-header-white.png', 'https://i.ibb.co/8jdLh71/Logo-header.png')
    const buttonBg = useColorModeValue('orange.400', 'orange.400')


    const setAuthModalState = useSetRecoilState(authModalState)


    return (

        <header>
            <Flex position="fixed" bg={bg} w="100%" zIndex={2} >
                <Box as="a" href="/" ml="10" >
                    <Image src={Logo} alt="logo" />
                </Box>
                <Flex position="fixed" top="1rem" right="1rem" align="center"   >
                    {/* Desktop */}
                    <Flex display={['none', 'none', 'flex', 'flex']} >
                        <Link href="/" color={color} aria-label="Home" my="5" mx="3" _focus={{}} _hover={{ color: "orange.400" }}>Home</Link>
                        <Link href="/feed" color={color} aria-label="feed" my="5" mx="3" _focus={{}} _hover={{ color: "orange.400" }}>Feed</Link>
                        <Link href="/metaverses" color={color} aria-label="metaverses" my="5" mx="3" _focus={{}} _hover={{ color: "orange.400" }}>Metaverses</Link>
                        <Link href="/about" color={color} aria-label="about" my="5" mx="3" _focus={{}} _hover={{ color: "orange.400" }}>About</Link>
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

                    <Flex flexDir="column" align="center"  >
                        <Link href="/" bg={bg} color={color} _focus={{}} _hover={{ color: "orange.400", bg: bg }} aria-label="Home" my={5} w="100%">
                            Home
                        </Link>
                        <Link href="/feed" bg={bg} color={color} _focus={{}} _hover={{ color: "orange.400", bg: bg }} aria-label="Feed" my={5} w="100%">
                            Feed
                        </Link>
                        <Link href="/metaverses" bg={bg} color={color} _focus={{}} _hover={{ color: "orange.400", bg: bg }} aria-label="Metaverses" my={5} w="100%">
                            Metaverses
                        </Link>
                        <Link href="/about" bg={bg} color={color} _focus={{}} _hover={{ color: "orange.400", bg: bg }} aria-label="About" my={5} mb={10} w="100%">
                            About
                        </Link>
                        {/* Login / Signup */}
                        <DarkModeSwitch />
                        <RightContent user={user}/>
                    </Flex>
                </Flex>
            </Flex>
        </header>
    )


    // return (
    //     <header >
    //         <Flex position="fixed" bg={bg} w="100%" zIndex={2} >
    //             <Box as="a" href="/" ml="10" >
    //                 <Image src={Logo} alt="logo" />
    //             </Box>
    //             <Flex position="fixed" top="1rem" right="1rem" align="center" >

    //                 {/* Desktop */}
    //                 <Flex color={color} display={['none', 'none', 'flex', 'flex']} >
    //                     <Link href="/" aria-label="Home" my="5" mx="3" _focus={{}} _hover={{ color: "orange.400" }}>Home</Link>
    //                     <Link href="/metaverses" aria-label="metaverses" my="5" mx="3" _focus={{}} _hover={{ color: "orange.400" }}>Metaverses</Link>
    //                     <Link href="/marketplaces" aria-label="marketplaces" my="5" mx="3" _focus={{}} _hover={{ color: "orange.400" }}>Marketplaces</Link>
    //                     <Link href="/about" aria-label="about" my="5" mx="3" _focus={{}} _hover={{ color: "orange.400" }}>About</Link>
    //                     <DarkModeSwitch />
    //                     <Menu >
    //                         <MenuButton ml="5" mx="5" >
    //                             <AvatarGroup spacing='1rem' >
    //                                 <Avatar name={Moralis.User.current().attributes.username} borderColor={buttonBg} bg={buttonBg} color={color} />
    //                                 <Text color={color}  >
    //                                     {Moralis.User.current().attributes.username} <ChevronDownIcon />
    //                                 </Text>
    //                             </AvatarGroup>
    //                         </MenuButton>
    //                         <MenuList bg={bg} >
    //                             <MenuItem as="a" href="/profile" color={color} _hover={{ bg: 'orange.400' }} _focus={{ bg: 'orange.400' }}
    //                             >Profile</MenuItem>
    //                             <MenuItem color={color} _hover={{ bg: 'orange.400' }} _focus={{ bg: 'orange.400' }}
    //                                 onClick={logout} disabled={isLoggingOut}>Logout</MenuItem>
    //                         </MenuList>
    //                     </Menu>

    //                 </Flex>

    //                 {/* Mobile */}
    //                 <IconButton aria-label="Open Menu" size="lg" mr={2} bg={bg} variant="outline" borderColor={buttonBg} color={color}
    //                     icon={<HamburgerIcon />} onClick={() => changeDisplay('flex')} display={['flex', 'flex', 'none', 'none']}
    //                 />

    //             </Flex>

    //             {/* Mobile Content */}
    //             <Flex w='100vw' display={display} bgColor="gray.50" zIndex={20} h="100vh"
    //                 pos="fixed" top="0" left="0" overflowY="auto" flexDir="column" bg={bg}
    //             >
    //                 <Flex justify="flex-end">
    //                     <IconButton mt={2} mr={2} aria-label="Open Menu" size="lg"
    //                         icon={<CloseIcon />} onClick={() => changeDisplay('none')}
    //                     />
    //                 </Flex>

    //                 <Flex flexDir="column" align="center"  >
    //                     <Link href="/" bg={bg} color={color} _focus={{}} _hover={{ color: "orange.400", bg: bg }} aria-label="Home" my={5} w="100%">
    //                         Home
    //                     </Link>
    //                     <Link href="/metaverses" bg={bg} color={color} _focus={{}} _hover={{ color: "orange.400", bg: bg }} aria-label="Metaverses" my={5} w="100%">
    //                         Metaverses
    //                     </Link>
    //                     <Link href="/marketplaces" bg={bg} color={color} _focus={{}} _hover={{ color: "orange.400", bg: bg }} aria-label="Marketplaces" my={5} w="100%">
    //                         Marketplaces
    //                     </Link>
    //                     <Link href="/about" bg={bg} color={color} _focus={{}} _hover={{ color: "orange.400", bg: bg }} aria-label="About" my={5} mb={10} w="100%">
    //                         About
    //                     </Link>
    //                     <Menu >
    //                         <MenuButton >
    //                             <AvatarGroup spacing='1rem' >
    //                                 <Avatar name={Moralis.User.current().attributes.username} borderColor={buttonBg} bg={buttonBg} />
    //                                 <Text color={color} w="20">
    //                                     {Moralis.User.current().attributes.username} <ChevronDownIcon />
    //                                 </Text>
    //                             </AvatarGroup>
    //                         </MenuButton>
    //                         <MenuList bg={bg} >
    //                             <MenuItem as="a" href="/profile" color={color} _hover={{ bg: 'orange.400' }} _focus={{ bg: 'orange.400' }}>
    //                                 Profile
    //                             </MenuItem>
    //                             <MenuItem color={color} _hover={{ bg: 'orange.400' }} _focus={{ bg: 'orange.400' }}
    //                                 onClick={logout} disabled={isLoggingOut}>
    //                                 Logout
    //                             </MenuItem>
    //                         </MenuList>
    //                     </Menu>
    //                 </Flex>
    //             </Flex>
    //         </Flex>
    //     </header>
    // )

}