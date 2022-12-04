import { Button, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { useSignInWithGoogle, useSignInWithApple, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';



const OAuthButtons:React.FC = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const [signInWithApple, user, loading, error] = useSignInWithApple(auth);
    // const [signInWithTwitter, user, loading, error] = useSignInWithTwitter(auth);
    
    
    return (
        <Flex direction='column' w="100%" mb='4'>
            <Button variant='outline' mb='2' onClick={() => signInWithGoogle()}>
                <Image src='/images/googlelogo.png' alt='google logo' h='20px' mr='4' />
                Log In with Google
            </Button>
            
            {/* <Button variant='outline'>Log In with Apple</Button> */}
            {/* <Button variant='outline'>Log In with Twitter</Button> */}
            {error && <Text>{error.message}</Text>}

            
        </Flex>
    )
}
export default OAuthButtons;