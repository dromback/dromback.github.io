import { Box, Button, Flex, Icon, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Metaverse, metaverseState } from '../../atoms/metaversesAtom';
import Data from '../Data'
import { IoAperture } from 'react-icons/io5'
import useMetaverseData from '../../hooks/useMetaverseData';



type HeaderProps = {
    metaverseData: Metaverse;
};

const Header: React.FC<HeaderProps> = ({ metaverseData }) => {

    const bg = useColorModeValue('gray.200', '#242323')
    const color = useColorModeValue('black', 'white')
    const boxBg = useColorModeValue('#FFFFFF', '#121212')
    
    // @ts-ignore
    const {metaverseStateValue, loading, onFavoriteOrUnfavoriteMetaverse} = useMetaverseData(!!metaverseData);
    const isFavorite = !!metaverseStateValue.mySnippets.find((item) => item.metaverseId === metaverseData.id);

    return (
        <>
            <title>The Meta Portal | Metaverses | {metaverseData.name}</title>
            <Box flex='1' h='300px' bg={bg} py="7.5em"  >
                <Flex justifyContent='left' bg={boxBg} borderBottom='1px solid' borderTop='1px solid' borderColor='orange.500'>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center"
                        rounded="lg" width='375px' height='120px'  
                    >
                        {metaverseStateValue.currentMetaverse.imageURL ? (
                            <Image 
                                borderRadius="lg"
                                
                                maxH='100px'
                                src={metaverseStateValue.currentMetaverse.imageURL}
                                alt={metaverseData.name}
                                position="relative"
                                color="blue.500"
                                boxShadow="2px 2px 2px black"
                                
                            />
                        ) : (
                            <Icon as={IoAperture} fontSize={128} />
                        )}
                        
                            
                    </Box>
                    <Box display='flex' flexDirection='row'  alignItems='center' maxWidth='860px' >
                                <Text fontSize='18' mr='4'>{metaverseData.name}</Text>
                                <Button variant={isFavorite ? 'favorite' : 'addFavorite'} isLoading={loading} 
                                onClick={() => onFavoriteOrUnfavoriteMetaverse(metaverseData, isFavorite)}
                                >
                                    {isFavorite ? 'Favorite' : '+ Favorite'} 
                                </Button>
                    </Box>
                    
                    
                </Flex>
                
            </Box>
        </>
    );
}
export default Header;