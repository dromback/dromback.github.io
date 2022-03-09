import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Header from "../components/Header";

const Marketplaces = () => {

    const highstreet = "https://static.wixstatic.com/media/3e1ac7_65e3cf371f2b473e89697186de447ed1~mv2.png/v1/fill/w_222,h_125,al_c,usm_0.66_1.00_0.01,enc_auto/highstreet.png"
    const galaxe = "https://static.wixstatic.com/media/3e1ac7_d6f1e179af9b46c3a7212f25019b9c89~mv2.png/v1/fill/w_225,h_162,al_c,enc_auto/HODL.png"
    const metamall = "https://static.wixstatic.com/media/3e1ac7_c645ab721192475a86c24aed5be35cb3~mv2.png/v1/fill/w_240,h_33,al_c,usm_0.66_1.00_0.01,enc_auto/Metamall.png"
    

    return (
        <><>
            <Flex direction="column" width="100vw" height="100vh" overflowX="hidden" overflowY="scroll">
                <Header />
                <Box flex="1" bg="#242323"  px="44" py="20" >
                    <Text fontSize="60" color="white" mb="10">Popular Metaverse Marketplaces</Text>
                <SimpleGrid columns={2} spacingX='1px' spacingY='20px'>
                    
                    {/* Highstreet */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/highstreet'>
                            <Image ml="6" position="relative" top="65px" left="61px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={highstreet} alt="Highstreet"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="50px" color="white"  >
                                <Text fontSize="19">Highstreet is an NFT-based gamified shopping experience supported by the Ethereum and Polygon Networks. 
                                    Both a metaverse and marketplace, Highstreet touts their Phygital concept where their products exist both in physical and 
                                    virtual form. The native Highstreet currency is $HIGH.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>
                    
                    {/* GalaxE */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/galaxe'>
                            <Image ml="6" position="relative" top="46px" left="62px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={galaxe} alt="GalaxE"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="75px" color="white"  >
                                <Text fontSize="19">GalaxE is the first cross-blockchain social media NFT metaverse. It was designed to help users buy, 
                                    sell, and socialize the global marketplace. Its native token is $HODL.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    {/* Metamall */}
                    <Box bg='#121212' width='400px' height='250px' borderWidth="thin" borderColor="gray.700">
                        <Box as="a" href='/metaverses/axie-infinity'>
                            <Image ml="6" position="relative" top="105px" left="60px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={metamall} alt="Metamall"/>
                        </Box>
                    </Box>
                    <Box position="relative" left="-386px" bg='#121212' width='1175px' height='250px' borderWidth="thin" borderColor="gray.700" px="5" py="5">
                        <Box w="700px" h="200px"  >
                            <Box position="relative" top="60px" color="white"  >
                                <Text fontSize="19">The mall enters the metaverse. Metamall is the first of its kind mall located in the metaverse. It will allow users 
                                    to build, explore, and trade in their own virtual mall. $MALL is its native token.
                                </Text>
                            </Box>    
                        </Box>      
                    </Box>

                    


                </SimpleGrid>
                </Box>
                
            </Flex>
        </>
        
        </>
    );

  
}

export default Marketplaces;

