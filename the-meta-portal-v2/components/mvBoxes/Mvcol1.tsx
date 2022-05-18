import { Box, useColorModeValue } from "@chakra-ui/react";


export default function Mvcol1({children}){

    const bg = useColorModeValue('#FFFFFF', '#121212')
    const color = useColorModeValue('black', 'white')

    return(
        <Box bg={bg} w="50%" borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                {children}         
        </Box>
    )
}