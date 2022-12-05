import { Flex } from '@chakra-ui/react';
import React, { ReactNode } from "react";
import Navbar from '../Navbar/Navbar'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
        <Flex direction='column' w={{base: '100%', md: '100%'}} >
          <main>{children}</main>
        </Flex>
      </>
    );
  }
export default Layout;