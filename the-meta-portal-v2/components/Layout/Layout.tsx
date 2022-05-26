import { Flex } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Navbar/Navbar'

const Layout:React.FC = ({children}) => {
    
    return (
        <>
            <Navbar />
                <main>{children}</main>
        </>
    )
}
export default Layout;