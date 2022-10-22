import { useColorModeValue, Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState, ModalView } from '../../../atoms/authModalAtom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebase/clientApp'
import {FIREBASE_ERRORS} from '../../../firebase/errors'

type SignUpProps = {
    toggleView: (view: ModalView) => void;
  };

const SignUp: React.FC<SignUpProps> = ({ toggleView }) => {

    const setAuthModalState = useSetRecoilState(authModalState)
    const [signUpForm, setSignUpForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const color = useColorModeValue('black', 'white')
    const bg = useColorModeValue('#FFFFFF', '#121212')

    const [error, setError] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        userError,
    ] = useCreateUserWithEmailAndPassword(auth);

    // Firebase logic
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (error) setError('')
        if(signUpForm.password !== signUpForm.confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        createUserWithEmailAndPassword(signUpForm.email, signUpForm.password)
    }

    // Update form state
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpForm(prev => ({
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
            <Input required name='confirmPassword' placeholder='confirm password' type='password' mb='2' onChange={onChange} _placeholder={{ color: color }}
                _hover={{ border: '1px solid' }} borderColor={color} _focus={{ border: '1px solid' }} bg={bg} />
            
            <Text textAlign='center' color='red' fontSize='10pt'>{error || FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}</Text>
            
            <Button w='100%' h='36px' color={color} mt='2' mb='2' type="submit" isLoading={loading}>
                Sign Up
            </Button>
            <Flex fontSize='9pt' justifyContent='center'>

                <Text mr='2'>Already a member?</Text>
                <Text color='blue.500' fontWeight='700' cursor='pointer' onClick={() => setAuthModalState((prev) => ({
                    ...prev,
                    view: 'login',
                }))}>
                    LOG IN
                </Text>

            </Flex>
        </form>
    )
}
export default SignUp;


