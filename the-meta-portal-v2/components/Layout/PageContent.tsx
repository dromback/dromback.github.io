import { Flex, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type PageContentProps = {
    children: ReactNode[];
  };
  
  const PageContent: React.FC<PageContentProps> = ({ children }) => {

    const bg = useColorModeValue('gray.200', '#242323')
    const color = useColorModeValue('black', 'white')
    const boxBg = useColorModeValue('#FFFFFF', '#121212')
    
    
    return (
        <Flex justify='center' p='16px 0px' bg={bg} py='10em'>
            <Flex width="95%" justify="center" maxWidth="860px">
                {/* LHS */}
                <Flex
                direction="column"
                width={{ base: "100%", md: "65%" }}
                mr={{ base: 0, md: 6 }}
                >
                    {children && children[0]}
                </Flex>

                {/* RHS */}
                <Flex
                direction="column"
                display={{ base: "none", md: "flex" }}
                flexGrow={1}
                >
                    {children && children[1]}
                </Flex>
            </Flex>
        </Flex>
    )
}
export default PageContent;