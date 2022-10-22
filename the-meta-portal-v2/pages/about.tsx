import { Box, Container, Flex, Text, useColorModeValue } from "@chakra-ui/react";



const About = () => {

  const bg = useColorModeValue('gray.200', '#242323')
  const color = useColorModeValue('black', 'white')
  const boxBg = useColorModeValue('#FFFFFF', '#121212')

    return (
        <><>
            <title>Intervrs | About</title>
            <Flex direction="column" bg={bg} maxW="100vw" minH="100vh" >
              
              <Box flex="1"  px="0" py="11em" >
                  <Container h="60vh" w="100%" bg={boxBg} maxW="80vw" maxH="120vh" rounded="lg">
                    <Box position="relative" top="80px" >
                      <Text align="center" color={color}>
                        <Text as="u" fontSize="2.5em" fontWeight="bold" mb="10">Our Mission</Text>
                        <Text mt="5" fontSize="1.1em" letterSpacing="wide" >We believe in an equal access metaverse that belongs to you, the user.</Text>
                        <Text mt="5" fontSize="1.1em" letterSpacing="wide">It should be done your way, in your style, and on your schedule.</Text>
                        <Text mt="5" fontSize="1.1em" letterSpacing="wide"> That is why we created Intervrs.</Text>
                        <Text mt="5" fontSize="1.1em" letterSpacing="wide">Choose the metaverses that mean something to you.</Text>
                        <Text mt="5" fontSize="1.1em" letterSpacing="wide">Customize it as you like.</Text>
                        <Text mt="5" fontSize="1.1em" letterSpacing="wide">Go explore.</Text>
                      </Text>
                    </Box>
                  </Container>
                </Box>
                
            </Flex>
        </>
        
        </>
    );

  
}

export default About;

