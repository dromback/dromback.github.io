import { Box, Container, Grid, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function CustomContainer(){
    

    const decentraland = "https://i.ibb.co/VQh7h3V/Decentraland-thumb.png"
    const sandbox = "https://i.ibb.co/Thtqp22/The-Sandbox-thumb.png"
    const roblox = "https://i.ibb.co/8DFhXG4/roblox-thumb.png"
    const axie = "https://i.ibb.co/hB0QXQz/axie-thumb.png"
    const fortnite = "https://i.ibb.co/ZNhqXF4/Fortnite-Logo-thumb.png"
    const minecraft = "https://i.ibb.co/9gjYx15/minecraft-thumb.png"

    return(

        <Box maxW="100em" minH="30em" display="flex" flexDirection="column" alignItems="center" justifyContent="center" >   
                    {/* Title */}
                    <Box mb="5"  >
                    <Text textAlign="center" fontSize="2.5em" color="white">Trending</Text>
                    </Box>

                    <SimpleGrid columns={2} spacingX='2' spacingY='2' >
                        {/* Column 1 */}
                        <Box w="10em"  py="3" _hover={{bg: '#121212'}}  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <Box as="a" href="/metaverses/decentraland"  >
                                <Box  h="20" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={decentraland} alt="Decentraland"/>
                                </Box>
                                <Box mt="2" >
                                    <Text color="white" textAlign="center" >Decentraland</Text>
                                </Box>
                            </Box>
                            
                        </Box>
                        <Box w="10em"  py="3" _hover={{bg: '#121212'}}  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <Box as="a" href="/metaverses/roblox" >
                                <Box h="20"  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={roblox} alt="Roblox"/>
                                </Box>
                                <Box mt="2">
                                    <Text color="white" textAlign="center">Roblox</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box w="10em"  py="3" _hover={{bg: '#121212'}} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <Box as="a" href="/metaverses/the-sandbox" >
                                <Box h="20"  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={sandbox} alt="The Sandbox"/>
                                </Box >
                                <Box mt="2">
                                    <Text color="white" textAlign="center" >The Sandbox</Text>
                                </Box>
                            </Box>
                        </Box>
                        
                                        
                        {/* Column 2 */}
                        <Box w="10em"  py="3" _hover={{bg: '#121212'}}  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <Box as="a" href="/metaverses/minecraft" maxW="90%" >
                                <Box h="20"  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={minecraft} alt="Minecraft"/>
                                </Box>  
                                <Box mt="2">
                                    <Text color="white" textAlign="center">Minecraft</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box w="10em"  py="3" _hover={{bg: '#121212'}}  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <Box as="a" href="/metaverses/fortnite" >
                                <Box h="20" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={fortnite} alt="Fortnite"/>
                                </Box>
                                <Box mt="2">
                                    <Text color="white" textAlign="center">Fortnite</Text>
                                </Box>
                            </Box>
                        </Box>
                        
                        <Box w="10em"  py="3" _hover={{bg: '#121212'}}  display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <Box as="a" href="/metaverses/axie-infinity" >
                                <Box h="20" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                    <Image borderRadius="lg" boxShadow="2px 2px 2px black" src={axie} alt="Axie Infinity"/>
                                </Box>
                                <Box mt="2">
                                    <Text color="white" textAlign="center">Axie Infinity</Text>
                                </Box>
                            </Box>
                        </Box>
                    </SimpleGrid>
        </Box>
        
    )
}




