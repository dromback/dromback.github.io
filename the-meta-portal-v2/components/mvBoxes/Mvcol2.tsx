import { Box, useColorModeValue } from "@chakra-ui/react";



export default function Mvcol2({children}){

    const bg = useColorModeValue('#FFFFFF', '#121212')
    const color = useColorModeValue('black', 'white')

    return(
        
        <Box bg={bg} w="150%" h="26vh" maxh="32vh" display="flex" flexDirection="column" alignItems="left" 
            justifyContent="center"  borderWidth="thin" borderColor="gray.700" px="5" py="5"
        > 
            <Box color={color} w="100%" >
                {children}
            </Box>         
        </Box>
    )
}