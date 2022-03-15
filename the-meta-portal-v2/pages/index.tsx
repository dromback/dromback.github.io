
import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Trending from "../components/Trending";
import Search from "../components/Search";



export default function Home() {

  

  
 
    return(
      <>
        <Flex direction="column" width="100vw" height="100vh">
          <Header />
          <Box flex="1" bg="#242323" px="44" py="20" >
            
            {/* Search Bar */}
            <Search />
            
            {/* Trending Metas */}
            <Trending />

          </Box>
        </Flex>
        
      </>
    )

}
