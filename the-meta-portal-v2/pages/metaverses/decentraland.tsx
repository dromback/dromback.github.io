import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";




const Decentraland = () => {

    const decentraland = "https://i.ibb.co/mzy4srq/Decentraland.png"
    const bg = useColorModeValue('gray.200', '#242323')
    const color = useColorModeValue('black', 'white')
    const boxBg = useColorModeValue('#FFFFFF', '#121212')

    return (
        <>
            <title>The Meta Portal | Metaverses | Decentraland</title>
            <Flex direction="column" maxW="100vw" minH="100vh">
                
                <Box flex="1" bg={bg} py="11em">
                    
                    <Flex align='center' justifyContent='center'>
                            <Box bg={boxBg} display="flex" flexDirection="column" alignItems="center" justifyContent="center" 
                                rounded="lg" width='375px' height='250px' borderWidth="thin" borderColor="gray.700" mr='5'
                            >
                                <Image maxW="75%"  borderRadius="lg" boxShadow="2px 2px 2px black" src={decentraland} alt="Decentraland"/>
                            </Box>
                            <Box  bg={boxBg} color={color} display="flex" flexDirection="column" justifyContent="center" 
                                width='900px' height='250px' rounded="lg" borderWidth="thin" borderColor="gray.700" px="5" py="5"
                            >
                                <Text fontSize="19">Decentraland is a metaverse platform built on the Ethereum network. It allows its users to create, explore, and trade 
                                    in their self-proclaimed first-ever virtual world owned by its users. Decentraland operates under its native token $MANA.
                                </Text>         
                            </Box>
                    </Flex>
                    <Flex align='center' justifyContent='center' rounded="lg" mt='5'>
                        <Box bg={boxBg} color={color} display="flex" flexDirection="column" alignItems="center" justifyContent="center" 
                            width='1300px' height='250px' rounded="lg" borderWidth="thin" borderColor="gray.700">
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </>
    );

  
}

export default Decentraland;