import { CloseIcon, SearchIcon } from "@chakra-ui/icons"
import { Box, Container, Flex, IconButton, Image, Input, InputGroup, InputLeftElement, InputRightElement, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react"
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
    const hoverBg = useColorModeValue('gray.200', '#242323')
    
    const [filter, setFilter] = useState('');

    const searchText = (event) =>{
        setFilter(event.target.value);
    }
    let dataSearch = data.cardData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    });

    const [display, changeDisplay] = useState('none')
    
    return (
        <>
            {/* Search Bar */}
            
            <InputGroup maxW="30%" mx="auto" boxShadow={boxShadow} rounded='full' display="flex" justifyContent="space-between" alignItems="center" zIndex={1} >
              <InputLeftElement pointerEvents='none' >
                <SearchIcon color={color} />
              </InputLeftElement> 
            
              <Input 
                 value={filter} onChange={searchText.bind(this)}
                 variant="none" rounded='full' bg={bg}
                 color={color}
                 _hover={{bg: hoverBg, boxShadow: boxShadowHover}} _focus={{bg: bg}} 
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
            
            {/* Desktop */}
            <Flex display={['none', 'none', 'none','flex']} >
               <Container  w="60%" maxW="90vw" py="4" rounded="lg" display="flex" flexDirection="column" alignItems="center" >
                    <SimpleGrid columns={2} spacingX='1' spacingY='2' >
                    
                        {filter && dataSearch.map((item) => {
                            return(
                                // eslint-disable-next-line react/jsx-key
                                <Flex mx="0"  mb="1" px="1" w="100%" minH="40vh"  >
                                    <Box p="0" display="flex" flexDirection="column" overflow="hidden"  h="400" bg={bg} color={color} rounded="lg" >
                                        <Box as="a" href={item.link} h="200" display="flex" flexDirection="column" alignItems="center" justifyContent="center"  >
                                            <Image src={item.img}  shadow="2px 2px 2px black" alt={item.title} rounded="lg" mt="5" maxW="70%"/>
                                        </Box>    
                                        <Box display="flex" h="25" flexDirection="column" justifyContent="center" >
                                            <Text fontSize="1em" align="center">{item.title} </Text>
                                        </Box>
                                        <Box display="flex" h="300" flexDirection="column" justifyContent="center" >
                                            <Text fontSize="1.8vh" ml="5" mr="5" align="left">{item.desc}</Text>
                                        </Box>
                                    </Box>
                                </Flex>
                            )
                        })}
                    </SimpleGrid>
                </Container>
            </Flex>

            {/* Mobile Display */}
            <Flex display={['flex', 'flex', 'flex','none']} >
               <Container  w="100%" maxW="90vw" py="4" rounded="lg" display="flex" flexDirection="column" alignItems="center" >
                    <SimpleGrid columns={2} spacingX='1' spacingY='2' >
                    
                        {filter && dataSearch.map((item) => {
                            return(
                                // eslint-disable-next-line react/jsx-key
                                <Flex mx="0"  mb="1" px="1" w="100%" minH="40vh"  >
                                    <Box p="0" display="flex" flexDirection="column" overflow="hidden"  h="600" bg={bg} color={color} rounded="lg" >
                                        <Box as="a" href={item.link} h="200" display="flex" flexDirection="column" alignItems="center" justifyContent="center"  >
                                            <Image src={item.img}  box-shadow="2px 2px 2px black" alt={item.title} rounded="lg" mt="5" />
                                        </Box>    
                                        <Box display="flex" h="25" flexDirection="column" justifyContent="center" >
                                            <Text fontSize="1em" align="center">{item.title} </Text>
                                        </Box>
                                        <Box display="flex" h="400" flexDirection="column" justifyContent="center" >
                                            <Text fontSize="1.8vh" ml="5" mr="5" align="left">{item.desc}</Text>
                                        </Box>
                                    </Box>
                                </Flex>
                            )
                        })}
                    </SimpleGrid>
                </Container>
            </Flex>

        </>
    )
}

export default Search