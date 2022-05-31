import { Flex } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar/Navbar'

const Layout:React.FC = ({children}) => {
    
    return (
        <>
            <Navbar />
            <Flex direction='column' w={{base: '100%', md: '100%'}} >
                {children && children as keyof typeof children}
            </Flex>
                
        </>
    )
}
export default Layout;