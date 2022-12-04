import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar'

const Layout:React.FC = ({ children }: { children: ReactNode }) => {
    
    return (
        <>
            <Navbar />
            <Flex direction='column' w={{base: '100%', md: '100%'}} >
                {children}
            </Flex>
        </>
    )
}
export default Layout;