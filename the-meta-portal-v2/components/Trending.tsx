import { Box, SimpleGrid, Text, Image, useColorModeValue } from "@chakra-ui/react";


export default function Trending(){
    
    const bg = useColorModeValue('#FFFFFF', '#121212')

    
    
    const intervrs = "/images/Intervrs Logo.png"
    const decentraland = "/images/thumbs/Decentraland_thumb.png"
    const sandbox = "/images/thumbs/The Sandbox_thumb.png"
    const otherside = "/images/thumbs/otherside_thumb.png"
    const fortnite = "/images/thumbs/Fortnite-Logo_thumb.png"
    const minecraft = "/images/thumbs/minecraft_thumb.png"
    

    return(

        <Box mx="auto" maxW="50em" minH="30em" display="flex" flexDirection="column" alignItems="center" justifyContent="center" >   
                    {/* Title */}
                    <Box mb="5"  >
                    <Text textAlign="center" fontSize="2.5em" >Trending</Text>
                    </Box>

                    <SimpleGrid columns={2} spacingX='2' spacingY='2' >
                        {/* Column 1 */}
                        <Box w="10em"  py="3" _hover={{bg: bg}}  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <Box as="a" href="/metaverses/intervrs" maxW="90%" >
                                <Box  h="20" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={intervrs} alt="Intervrs"/>
                                </Box>
                                <Box mt="2" >
                                    <Text textAlign="center" >Intervrs</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box w="10em"  py="3" _hover={{bg: bg}}  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <Box as="a" href="/metaverses/decentraland"  >
                                <Box  h="20" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={decentraland} alt="Decentraland"/>
                                </Box>
                                <Box mt="2" >
                                    <Text textAlign="center" >Decentraland</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box w="10em"  py="3" _hover={{bg: bg}} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <Box as="a" href="/metaverses/the-sandbox" >
                                <Box h="20"  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={sandbox} alt="The Sandbox"/>
                                </Box >
                                <Box mt="2">
                                    <Text textAlign="center" >The Sandbox</Text>
                                </Box>
                            </Box>
                        </Box>
                        
                                        
                        {/* Column 2 */}
                        <Box w="10em"  py="3" _hover={{bg: bg}}  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <Box as="a" href="/metaverses/minecraft" maxW="90%" >
                                <Box h="20"  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={minecraft} alt="Minecraft"/>
                                </Box>  
                                <Box mt="2">
                                    <Text textAlign="center">Minecraft</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box w="10em"  py="3" _hover={{bg: bg}}  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <Box as="a" href="/metaverses/fortnite" >
                                <Box h="20" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={fortnite} alt="Fortnite"/>
                                </Box>
                                <Box mt="2">
                                    <Text textAlign="center">Fortnite</Text>
                                </Box>
                            </Box>
                        </Box>
                        
                        <Box w="10em"  py="3" _hover={{bg: bg}}  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <Box as="a" href="/metaverses/otherside" >
                                <Box h="20"  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={otherside} alt="otherside"/>
                                </Box>
                                <Box mt="2">
                                    <Text textAlign="center">Otherside</Text>
                                </Box>
                            </Box>
                        </Box>
                    </SimpleGrid>
        </Box>
        
    )
}




