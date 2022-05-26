import { Button, Flex } from '@chakra-ui/react';
import { signOut, User } from 'firebase/auth';
import React from 'react';
import AuthModal from '../../Modal/Auth/AuthModal';
import AuthButtons from './AuthButtons';
import {auth} from '../../../firebase/clientApp'
import Icons from '../RightContent/Icons'
import UserMenu from './UserMenu';


type RightContentProps = {
     user?: User | null;
};

const RightContent:React.FC<RightContentProps> = ({ user }) => {
    
    return (
        <>
            <AuthModal />
            <Flex justify='center' align='center'>
                {user ? <UserMenu user={user}/> : <AuthButtons />}
                
            </Flex>
        </>
    )
}
export default RightContent;