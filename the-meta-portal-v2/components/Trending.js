import { Box, Container, Image, Text } from "@chakra-ui/react";

export default function CustomContainer(){
    

    const decentraland = "https://i.ibb.co/VQh7h3V/Decentraland-thumb.png"
    const sandbox = "https://i.ibb.co/Thtqp22/The-Sandbox-thumb.png"
    const roblox = "https://i.ibb.co/8DFhXG4/roblox-thumb.png"
    const axie = "https://i.ibb.co/hB0QXQz/axie-thumb.png"
    const fortnite = "https://i.ibb.co/ZNhqXF4/Fortnite-Logo-thumb.png"
    const minecraft = "https://i.ibb.co/9gjYx15/minecraft-thumb.png"

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
                        <Image ml="6" position="relative" objectFit="cover" w="auto" h="80px" top="10px" left="5px" maxW="70%" borderRadius="lg" 
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




