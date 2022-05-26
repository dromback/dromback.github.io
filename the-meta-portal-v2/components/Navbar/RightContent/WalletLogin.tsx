import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, CloseButton, Flex, Icon, MenuItem, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';
import { MdOutlineLogin } from 'react-icons/md'


const WalletLogin:React.FC = () => {

    const bg = useColorModeValue('#FFFFFF', '#121212')
    const color = useColorModeValue('black', 'white')
    const { user, isAuthenticated, authenticate, isAuthenticating, logout, authError, isLoggingOut, Moralis, account } = useMoralis();
    
    const [username, setUsername] = useState(user && user.attributes.username);
    const [email, setEmail] = useState(user && user.attributes.email);
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (!user) return null;
        setUsername(user.getUsername())
        setEmail(user.getEmail())
    }, [user])
    
    return (
        <>
            <MenuItem as="button" color={color} _hover={{ bg: 'orange.400' }} _focus={{ bg: 'orange.400' }}
                // @ts-expect-error
                isLoading={isAuthenticating} onClick={() => authenticate({
                    signingMessage: "Sign to login to The Meta Portal"
                })} >
                     <Flex align='center'>
                        <Icon fontSize='20' mr='2' as={MdOutlineLogin} />
                        Login with wallet
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
    )
}
export default WalletLogin;