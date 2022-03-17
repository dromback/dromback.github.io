import { SearchIcon } from "@chakra-ui/icons"
import { Box, Container, Image, Input, InputGroup, InputLeftElement, SimpleGrid, Text } from "@chakra-ui/react"
import { useState } from "react"
import { FaDice } from "react-icons/fa"
import data from "./Data"


const Search = () => {
    
    const [filter, setFilter] = useState('');

    const searchText = (event) =>{
        setFilter(event.target.value);
    }
    let dataSearch = data.cardData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    });
    
    return (
        <>
            {/* Search Bar */}
            <InputGroup maxW="500px" mx="auto" boxShadow='2px 2px 2px white' rounded='full' >
              <InputLeftElement pointerEvents='none'>
                <SearchIcon color='white' />
              </InputLeftElement>
              <Input 
                 value={filter} onChange={searchText.bind(this)}
                 variant='outline' rounded='full' bg="#121212"
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

            {/* Search Results */}
            
               <Container  w="1000px" maxW="1000px" py="4" rounded="lg"  >
                    <SimpleGrid columns={2} spacingX='1px' spacingY='5px' >
                    
                        {filter && dataSearch.map((item, index) => {
                            return(
                                // eslint-disable-next-line react/jsx-key
                                <Box mx="0" mb="1" px="1" h="400px" >
                                    <Box p="0" overflow="hidden" h="400px" bg="#121212" rounded="lg" >
                                        <Box as="a" href={item.link} h="180px" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                            <Image src={item.img}  shadow="2px 2px 2px black" alt={item.title} rounded="lg" mt="5" />
                                        </Box>    
                                        <Box>
                                            <Text color="white" mt="2" mb="7" fontSize="20px" align="center">{item.title} </Text>
                                            <Text color="white" ml="5" mr="5" align="left">{item.desc}</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            )
                        })}
                    </SimpleGrid>
                </Container>

        </>
    )
}

export default Search