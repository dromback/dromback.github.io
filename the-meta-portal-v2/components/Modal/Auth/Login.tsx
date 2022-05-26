import { Button, Flex, Input, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState, ModalView } from '../../../atoms/authModalAtom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebase/clientApp'
import { FIREBASE_ERRORS } from '../../../firebase/errors';

type LoginProps = {
    toggleView: (view: ModalView) => void;
};

const Login: React.FC<LoginProps> = ({ toggleView }) => {

    const setAuthModalState = useSetRecoilState(authModalState)
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    })

    const color = useColorModeValue('black', 'white')
    const bg = useColorModeValue('#FFFFFF', '#121212')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // Firebase logic
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        signInWithEmailAndPassword(loginForm.email, loginForm.password);
    }

    // Update form state
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

    return (
        <form onSubmit={onSubmit}>
            <Input required name='email' placeholder='email' type='email' mb='2' onChange={onChange} _placeholder={{ color: color }}
                _hover={{ border: '1px solid' }} borderColor={color} _focus={{ border: '1px solid' }} bg={bg} />
            <Input required name='password' placeholder='password' type='password' mb='2' onChange={onChange} _placeholder={{ color: color }}
                _hover={{ border: '1px solid' }} borderColor={color} _focus={{ border: '1px solid' }} bg={bg} />

            <Text textAlign='center' color='red' fontSize='10pt'>
                {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
            </Text>

            <Button w='100%' h='36px' color={color} mt='2' mb='2' type="submit" isLoading={loading}>
                Log In
            </Button>

            <Flex justifyContent="center" mb={2}>
                <Text fontSize="9pt" mr={1}>
                    Forgot your password?
                </Text>
                <Text
                    fontSize="9pt"
                    color='orange.500'
                    fontWeight='700'
                    cursor="pointer"
                    onClick={() => toggleView("resetPassword")}
                >
                    Reset
                </Text>
            </Flex>

            <Flex fontSize='9pt' justifyContent='center'>

                <Text mr='2'>New here?</Text>
                <Text color='orange.500' fontWeight='700' cursor='pointer' onClick={() => setAuthModalState((prev) => ({
                    ...prev,
                    view: 'signup',
                }))}>
                    SIGN UP
                </Text>

            </Flex>
        </form>
    )
}
export default Login;