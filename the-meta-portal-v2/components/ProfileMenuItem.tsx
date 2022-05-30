import { Flex, Icon, MenuItem, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { CgProfile } from 'react-icons/cg'


const ProfileMenuItem:React.FC = () => { 
    
    const color = useColorModeValue('black', 'white')
    
    return(
        <>
            <MenuItem as="a" href="/profile" color={color} _hover={{ bg: 'orange.400' }} _focus={{ bg: 'orange.400' }}>
                <Flex align='center'>
                    <Icon fontSize='20' mr='2' as={CgProfile} />
                    Profile
                </Flex>
            </MenuItem>
        </>    
    )


}
export default ProfileMenuItem;