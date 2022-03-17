import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Header from "../components/Header";



const About = () => {

    

    return (
        <><>
            <title>The Meta Portal | About</title>
            <Flex direction="column" width="100vw" height="100vh">
                <Header />
                <h1>The Meta Portal - About</h1>
                <Box flex="1" bg="#242323" px="44" py="20" >
                  <Container h="600px" w="800px" bg="#121212" maxW="800px" maxH="700px" rounded="lg">
                    <Box position="relative" top="80px" >
                      <Text align="center" color="white">
                        <Text as="u" fontSize="4xl" fontWeight="bold" mb="10">Our Mission</Text>
                        <Text mt="5" fontSize="lg" letterSpacing="wide" >We believe in an equal access metaverse that belongs to you, the user.</Text>
                        <Text mt="5" fontSize="lg" letterSpacing="wide">It should be done your way, in your style, and on your schedule.</Text>
                        <Text mt="5" fontSize="lg" letterSpacing="wide"> That is why we created The Meta Portal.</Text>
                        <Text mt="5" fontSize="lg" letterSpacing="wide">Choose the metaverses that mean something to you.</Text>
                        <Text mt="5" fontSize="lg" letterSpacing="wide">Customize it as you like.</Text>
                        <Text mt="5" fontSize="lg" letterSpacing="wide">Go explore.</Text>
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

