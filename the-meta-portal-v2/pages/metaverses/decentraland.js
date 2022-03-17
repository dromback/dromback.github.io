import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import Header from "../../components/Header";



const Decentraland = () => {

    const decentraland = "https://i.ibb.co/mzy4srq/Decentraland.png"
    

    return (
        <><>
            <title>The Meta Portal | Metaverses | Decentraland</title>
            <Flex direction="column" width="100vw" height="100vh" overflowX="hidden" overflowY="scroll">
                <Header />
                <Box flex="1"  bg="#242323"  px="44" py="20" >
                <h1>The Meta Portal | Metaverses | Decentraland</h1>
                    <Container>
                            <Box bg='#121212' position="relative" right="400px" rounded="lg" width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                                <Image ml="6" position="relative" top="60px" left="59px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={decentraland} alt="Decentraland"/>
                            </Box>
                            <Box position="relative" left="10px" top="-250px" bg='#121212' width='900px' height='250px' rounded="lg" borderWidth="thin" borderColor="gray.700" px="5" py="5">
                                <Box w="700px" h="200px"  >
                                    <Box position="relative" top="60px" color="white"  >
                                        <Text fontSize="19">Decentraland is a metaverse platform built on the Ethereum network. It allows its users to create, explore, and trade 
                                            in their self-proclaimed first-ever virtual world owned by its users. Decentraland operates under its native token $MANA.
                                        </Text>
                                    </Box>    
                                </Box>      
                            </Box>
                    </Container>
                    <Container position="relative"  width='1350px' height='250px' rounded="lg" >
                        <Box position="relative" right="402px" top="-200px" bg='#121212' width='1312px' height='250px' rounded="lg"borderWidth="thin" borderColor="gray.700"></Box>
                    </Container>
                </Box>
                
            </Flex>
        </>
        
        </>
    );

  
}

export default Decentraland;