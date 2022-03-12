import { Icon, SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Input, InputGroup, InputLeftElement, Container, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import Trending from "../components/Trending";
import { FaDice } from "react-icons/fa";


export default function Home() {
   
 
    return(
      <>
        <Flex direction="column" width="100vw" height="100vh">
          <Header />
          <Box flex="1" bg="#242323" px="44" py="20" >
            
            {/* Search Bar */}
            <InputGroup maxW="500px" mx="auto" boxShadow='2px 2px 2px white' rounded='full'   >
              <InputLeftElement pointerEvents='none'>
                <SearchIcon color='white' />
              </InputLeftElement>
              <Input  variant='outline' rounded='full' bg="#121212"
                _hover={{bg: 'gray.900', boxShadow: '3px 3px 3px white'}} _focus={{bg: '#121212'}} color="white"  
                _placeholder={{color: 'white', position: "relative", top: "-3px", left: "-3px"}} 
                textAlign="center" placeholder="Search the metaverse" fontSize="20" 
              />
            </InputGroup>
            
            {/* Dice Icon in Search Bar */}
            <Container position="relative" h="25px" w="50px" left="220px" top="-33px" >
              <Box as="a" href="/"  >
                  <FaDice size="25" color="white"/>    
              </Box>
            </Container>

            {/* Trending Metas */}
            <Trending />

          </Box>
        </Flex>
        
      </>
    )

}
