import { Box, Container, Image, Text } from "@chakra-ui/react";

export default function CustomContainer(){
    
    const decentraland = "https://static.wixstatic.com/media/3e1ac7_362d404f10954cbbb6124671c65152f4~mv2.png/v1/fill/w_235,h_131,al_c,usm_0.66_1.00_0.01,enc_auto/Decentraland.png"
    const sandbox = "https://static.wixstatic.com/media/3e1ac7_a31d65c51cc74ccfb78665351a5ba3ec~mv2.png/v1/fill/w_264,h_131,al_c,usm_0.66_1.00_0.01,enc_auto/The%20Sandbox.png"
    const roblox = "https://static.wixstatic.com/media/3e1ac7_62d601dd5d5a4fad950bcca1d3696645~mv2.png/v1/fill/w_219,h_67,al_c,usm_0.66_1.00_0.01,enc_auto/roblox.png"
    const axie = "https://static.wixstatic.com/media/3e1ac7_0ef20537ccaa4aa1a135bbee471f6cab~mv2.png/v1/fill/w_200,h_99,al_c,lg_1,enc_auto/axie.png"
    const fortnite = "https://static.wixstatic.com/media/3e1ac7_ce9c6d577eda44bf9007b6a983c244dd~mv2.jpg/v1/fill/w_264,h_149,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Fortnite-Logo_edited.jpg"
    const minecraft = "https://static.wixstatic.com/media/3e1ac7_fe7378c976d4491487829be16f0582b7~mv2.jpg/v1/crop/x_0,y_0,w_183,h_129/fill/w_213,h_149,al_c,lg_1,q_80,enc_auto/minecraft_jfif.jpg"


    return(

        <Box>
                <Container  px="20" py="0" mt="5" maxH="450px" position="relative" top="20px">
                {/* Title */}
                <Box mb="5">
                  <Text textAlign="center" fontSize="40" color="white">Trending</Text>
                </Box>

                {/* Column 1 */}
                <Box w="175px" h="120px" mt="1" _hover={{bg: '#121212'}}>
                    <Box as="a" href="/metaverses/decentraland" >
                        <Image ml="6" position="relative" top="12px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={decentraland} alt="Decentraland"/>
                        <Text position="relative" top="15px" left="43px" color="white">Decentraland</Text>
                    </Box>
                </Box>
                <Box w="175px" h="120px" mt="1" _hover={{bg: '#121212'}}>
                    <Box as="a" href="/metaverses/the-sandbox" >
                        <Image ml="6" position="relative" top="15px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={sandbox} alt="The Sandbox"/>
                        <Text position="relative" top="20px" left="44px" color="white">The Sandbox</Text>
                    </Box>
                </Box>
                <Box w="175px" h="120px" mt="1" _hover={{bg: '#121212'}}>
                    <Box as="a" href="/metaverses/roblox" >
                        <Image ml="6" position="relative" top="30px" maxW="75%" borderRadius="lg" boxShadow="2px 2px 2px black" src={roblox} alt="Roblox"/>
                        <Text position="relative" top="35px" left="65px" color="white">Roblox</Text>
                    </Box>
                </Box>
                                
                {/* Column 2 */}
                <Box w="175px" h="120px" mt="1" ml="1" position="relative" top="-372px" left="175px" _hover={{bg: '#121212'}}>
                    <Box as="a" href="/metaverses/minecraft" >
                        <Image ml="6" position="relative" w="auto" h="80px" top="10px" left="5px" maxW="70%" borderRadius="lg" 
                            boxShadow="2px 2px 2px black" src={minecraft} alt="Minecraft"/>
                        <Text position="relative" top="10px" left="55px" color="white">Minecraft</Text>
                    </Box>
                </Box>
                <Box w="175px" h="120px" mt="1" ml="1" position="relative"  top="-372px" left="175px" _hover={{bg: '#121212'}}>
                    <Box as="a" href="/metaverses/fortnite" >
                        <Image ml="6" position="relative" top="12px" left="3px" w="auto" h="68px" maxW="75%" borderRadius="lg" 
                            boxShadow="2px 2px 2px black" src={fortnite} alt="Fortnite"/>
                        <Text position="relative" top="15px" left="60px" color="white">Fortnite</Text>
                    </Box>
                </Box>
                 
                <Box w="175px" h="120px" mt="1" ml="1" position="relative" top="-372px" left="175px" _hover={{bg: '#121212'}}>
                    <Box as="a" href="/metaverses/axie-infinity" >
                        <Image ml="6" position="relative" top="15px" left="2px" w="auto" h="62px" maxW="75%" borderRadius="lg" 
                            boxShadow="2px 2px 2px black" src={axie} alt="Axie Infinity"/>
                        <Text position="relative" top="21px" left="46px" color="white">Axie Infinity</Text>
                    </Box>
                </Box>

              </Container>
        </Box>
        
    )
}




