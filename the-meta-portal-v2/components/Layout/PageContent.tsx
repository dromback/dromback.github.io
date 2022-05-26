import { Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

type PageContentProps = {
    
};

const PageContent:React.FC<PageContentProps> = ({ children }) => {

    const bg = useColorModeValue('gray.200', '#242323')
    const color = useColorModeValue('black', 'white')
    const boxBg = useColorModeValue('#FFFFFF', '#121212')
    
    
    return (
        <Flex justify='center' p='16px 0px' bg={bg} py='10em'>
            <Flex w='95%' justify='center' maxWidth='860px' >
                {/* Left Side */}
                <Flex direction='column' w={{base: '100%', md: '65%'}} mr={{base: 0, md: 6}} >
                    {children && children[0 as keyof typeof children]}
                </Flex>

                {/* Right Side */}
                <Flex direction='column' display={{base: 'none', md: 'flex'}} flexGrow='1' >
                    {children && children[1 as keyof typeof children]}
                </Flex>
            </Flex>
        </Flex>
    )
}
export default PageContent;