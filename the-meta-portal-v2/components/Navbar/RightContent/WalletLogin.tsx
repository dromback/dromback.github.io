import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton, Flex, Icon, MenuDivider, MenuItem, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';
import { MdOutlineLogin } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import ProfileMenuItem from '../../ProfileMenuItem';


const WalletLogin:React.FC = () => {

    const bg = useColorModeValue('#FFFFFF', '#121212')
    const color = useColorModeValue('black', 'white')
    const { user, isAuthenticated, authenticate, isAuthenticating, logout, authError, isLoggingOut, Moralis, account } = useMoralis();
    
    const [username, setUsername] = useState(user && user.attributes.username);
    const [email, setEmail] = useState(user && user.attributes.email);
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     if (!user) return null;
    //     setUsername(user.getUsername())
    //     setEmail(user.getEmail())
    // }, [user])
    
    
    if (!isAuthenticated) {
    return (
        <>
            
            <MenuItem as="button" color={color} _hover={{ bg: 'blue.400' }} _focus={{ bg: 'blue.400' }}
                // @ts-expect-error
                isLoading={isAuthenticating} 
                onClick={() => authenticate({
                    signingMessage: "Sign to login to Intervrs"
                })} >
                     <Flex align='center'>
                        <Icon fontSize='20' mr='2' as={MdOutlineLogin} />
                        Connect Wallet
                    </Flex>
                
            </MenuItem>


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
        </>
    )}

    return(
        <>
            <ProfileMenuItem />
            <MenuDivider color={color}/>
            <MenuItem color={color} _hover={{ bg: 'blue.400' }} _focus={{ bg: 'blue.400' }}
                onClick={logout} disabled={isLoggingOut}>
                <Flex align='center'>
                    <Icon fontSize='20' mr='2' as={MdOutlineLogin} />
                    Disconnect Wallet
                </Flex>
            </MenuItem>
        </>    
    )


}
export default WalletLogin;