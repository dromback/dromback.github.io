import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem, Avatar, AvatarGroup, Text, useColorModeValue, Flex, Icon, MenuDivider } from '@chakra-ui/react';
import { signOut, User } from 'firebase/auth';
import React from 'react';
import { CgProfile } from 'react-icons/cg'
import { MdOutlineLogin } from 'react-icons/md'
import { auth } from '../../../firebase/clientApp';
import {  GiTwoCoins } from 'react-icons/gi'
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import { metaverseState } from '../../../atoms/metaversesAtom';
import WalletLogin from './WalletLogin';


type UserMenuProps = {
    user?: User | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
    const resetMetaverseState = useResetRecoilState(metaverseState)
    const setAuthModalState = useSetRecoilState(authModalState);
    const logout = async () => {
        await signOut(auth);
        resetMetaverseState();
    }

    const bg = useColorModeValue('#FFFFFF', '#121212')
    const color = useColorModeValue('black', 'white')
    const buttonBg = useColorModeValue('blue.400', 'blue.400')

    return (
        <Menu >
            <MenuButton ml="5" mx="5" >
                <AvatarGroup spacing='1rem' >
                    <Avatar name={user?.displayName || user.email?.split("@")[0]} borderColor={buttonBg} bg={buttonBg} color={color} />
                    <Flex direction='column' align='flex-start'>
                        <Text color={color}>
                            {user?.displayName || user.email?.split("@")[0]} <ChevronDownIcon />
                        </Text>
                        <Flex>
                            <Icon as={GiTwoCoins} color='blue.400' mr='1' />
                            <Text color={color} fontSize='8pt'>1 PT</Text>
                        </Flex>
                    </Flex>
                </AvatarGroup>
            </MenuButton>
            <MenuList bg={bg} >

                <MenuItem color={color} _hover={{ bg: 'blue.400' }} _focus={{ bg: 'blue.400' }} onClick={logout}>
                    <Flex align='center'>
                        <Icon fontSize='20' mr='2' as={MdOutlineLogin} />
                        Log Out
                    </Flex>
                </MenuItem>
                <MenuDivider />
                <WalletLogin />
            </MenuList>
        </Menu>
    )
}
export default UserMenu;