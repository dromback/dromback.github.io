import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Flex, useColorModeValue, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import { authModalState } from '../../../atoms/authModalAtom';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';
import { auth } from '../../../firebase/clientApp';
import ResetPassword from './ResetPassword';

type AuthModalProps = {};

const AuthModal: React.FC<AuthModalProps> = () => {
    const [modalState, setModalState] = useRecoilState(authModalState)
    const [user, loading, error] = useAuthState(auth)

    const handleClose = () => {
        setModalState(prev => ({
            ...prev,
            open: false,
        }))
    }

    const toggleView = (view: string) => {
        setModalState({
          ...modalState,
          view: view as typeof modalState.view,
        });
      };

    useEffect(() => {
        if (user) handleClose();
    }, [user])

    const bg = useColorModeValue('gray.200', '#242323')
    const color = useColorModeValue('black', 'white')


    return (
        <>


            <Modal isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent bg={bg}>
                    <ModalHeader textAlign='center'>
                        {modalState.view === 'login' && "Login"}
                        {modalState.view === 'signup' && "Sign Up"}
                        {modalState.view === 'resetPassword' && "Reset Password"}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display='flex' flexDirection='column' alignItems='center' justifyContent='center' pb='6'>
                        <Flex direction='column' align='center' justify='center' w='70%'>
                            {modalState.view === 'login' || modalState.view === 'signup' ? (
                                <>
                                    <OAuthButtons />
                                    <Text color={color} fontWeight='700'>OR</Text>
                                    <AuthInputs toggleView={toggleView}/>
                                </>
                            ) : <ResetPassword toggleView={toggleView}/>}


                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default AuthModal;