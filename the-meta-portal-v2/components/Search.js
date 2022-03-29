import { CloseIcon, SearchIcon } from "@chakra-ui/icons"
import { Box, Container, IconButton, Image, Input, InputGroup, InputLeftElement, InputRightElement, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react"
import { FaDice } from "react-icons/fa"
import data from "./Data"


const Search = () => {
    
    const bg = useColorModeValue('#FFFFFF', '#121212')
    const color = useColorModeValue('black', 'white')
    const closeColor = useColorModeValue('#FFFFFF', '#121212')
    const closeBg = useColorModeValue('#121212', '#FFFFFF')
    const boxShadow = useColorModeValue('2px 1px 2px 2px black', '2px 1px 2px 2px white')
    const boxShadowHover = useColorModeValue('3px 3px 3px black', '3px 3px 3px white')
    
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
            
            <InputGroup maxW="30%" mx="auto" boxShadow={boxShadow} rounded='full' display="flex" justifyContent="space-between" alignItems="center" >
              <InputLeftElement pointerEvents='none'>
                <SearchIcon color={color} />
              </InputLeftElement>
              <Input 
                
                 value={filter} onChange={searchText.bind(this)}
                 variant='outline' rounded='full' bg={bg}
                 color={color}
                _hover={{bg: bg, boxShadow: boxShadowHover}} _focus={{bg: bg}}   
                _placeholder={{color: color, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}} 
                textAlign="center" placeholder="Search the metaverse" fontSize="1.2em" 
              />
              {filter && <InputRightElement mx="1">
                <IconButton aria-label="Clear Search" size="xs" color={color} bg=''
                        icon={ <CloseIcon /> } onClick={() => setFilter('')}
                        _hover={{bg: closeBg, color: closeColor}}
                        />
              </InputRightElement>}
            </InputGroup>
                
            
            {/* Dice Icon in Search Bar */}
            {/* Change this to a button outside of the Search Bar and have it be separate */}

            {/* <Container position="relative" left="450" top="-8" >
                <Box as="a" href="/"  >
                  <FaDice size="25" color="white"/>    
                </Box>
            </Container> */}

            {/* Search Results */}
            
               <Container  w="52vw" maxW="52vw" py="4" rounded="lg" display="flex" flexDirection="column" alignItems="center" >
                    <SimpleGrid columns={2} spacingX='1' spacingY='2' >
                    
                        {filter && dataSearch.map((item) => {
                            return(
                                // eslint-disable-next-line react/jsx-key
                                <Box mx="0" mb="1" px="1" w="100%" maxh="40vh" >
                                    <Box p="0" overflow="hidden"  h="400" bg={bg} color={color} rounded="lg" >
                                        <Box as="a" href={item.link} h="180" display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
                                            <Image src={item.img}  shadow="2px 2px 2px black" alt={item.title} rounded="lg" mt="5" />
                                        </Box>    
                                        <Box>
                                            <Text mt="2" mb="7" fontSize="1em" align="center">{item.title} </Text>
                                            <Text ml="5" mr="5" align="left">{item.desc}</Text>
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