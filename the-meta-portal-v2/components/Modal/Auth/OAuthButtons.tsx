import { Button, Flex, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSignInWithGoogle, useSignInWithApple, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import { signInWithMoralis } from '@moralisweb3/client-firebase-evm-auth';
import { auth, app } from '../../../firebase/clientApp';
import { getMoralisAuth } from '@moralisweb3/client-firebase-auth-utils';


const OAuthButtons:React.FC = () => {

    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const [signInWithApple, user, loading, error] = useSignInWithApple(auth);
    // const [signInWithTwitter, user, loading, error] = useSignInWithTwitter(auth);
    const moralisAuth = getMoralisAuth(app);

    const [user, setUser] = useState(null);
    
    async function login(){
        const res = await signInWithMoralis(moralisAuth);
        setUser(res.credentials.user.uid)
    }

    async function logout(){
        await auth.signOut();
        setUser(null);
    }
    
    return (
        <Flex direction='column' w="100%" mb='4'>
            {/* <Button variant='outline' mb='2' isLoading={loading} onClick={() => signInWithGoogle()}>
                <Image src='/images/googlelogo.png' alt='google logo' h='20px' mr='4' />
                Log In with Google
            </Button> */}
            <Button variant='outline'mb='2' onClick={() => login()}>Log In with Wallet</Button>
            {/* <Button variant='outline'>Log In with Apple</Button> */}
            {/* <Button variant='outline'>Log In with Twitter</Button> */}
            {/* {error && <Text>{error.message}</Text>} */}
        </Flex>
    )
}
export default OAuthButtons;