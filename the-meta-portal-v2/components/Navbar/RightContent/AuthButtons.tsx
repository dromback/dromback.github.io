import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    Flex,
    Icon,
    Menu, MenuButton, MenuItem, MenuList, Text, useColorModeValue
} from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "../../../atoms/authModalAtom";
import AuthModal from '../../Modal/Auth/AuthModal'
import WalletLogin from "./WalletLogin";
import { MdOutlineLogin } from 'react-icons/md'

type AuthButtonsProps = {

};

const AuthButtons: React.FC<AuthButtonsProps> = () => {

    const setAuthModalState = useSetRecoilState(authModalState)

    const bg = useColorModeValue('#FFFFFF', '#121212')
    const color = useColorModeValue('black', 'white')


    return (
        <>
            {/* Login / Signup */}
            <Menu>
                <MenuButton ml="1"  >
                    <Text color={color} mx="5" >
                        Login / Signup <ChevronDownIcon />
                    </Text>
                </MenuButton>
                <MenuList bg={bg}>
                    <MenuItem as="button" onClick={() => setAuthModalState({ open: true, view: 'signup' })}
                        color={color} _hover={{ bg: 'blue.400' }} _focus={{ bg: 'blue.400' }}>
                        <Flex align='center'>
                            <Icon fontSize='20' mr='2' as={MdOutlineLogin} />
                            Sign Up
                        </Flex>
                    </MenuItem>
                    <MenuItem as="button" onClick={() => setAuthModalState({ open: true, view: 'login' })}
                        color={color} _hover={{ bg: 'blue.400' }} _focus={{ bg: 'blue.400' }}>
                        <Flex align='center'>
                            <Icon fontSize='20' mr='2' as={MdOutlineLogin} />
                            Login with credentials
                        </Flex>
                    </MenuItem>
                    <WalletLogin />
                    <AuthModal />
                </MenuList>
            </Menu>
        </>
    )
}
export default AuthButtons;