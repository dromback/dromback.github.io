import { Box } from "@chakra-ui/react";


export default function Mvcol2({children}){
    return(
        // <Box bg='#121212' w="150%" position="relative" left="-397" display="flex" flexDirection="column" alignItems="left" 
        //     justifyContent="center"  borderWidth="thin" borderColor="gray.700" px="5" py="5"
        // >
        <Box bg='#121212' w="150%" h="26vh" maxh="30vh" display="flex" flexDirection="column" alignItems="left" 
            justifyContent="center"  borderWidth="thin" borderColor="gray.700" px="5" py="5"
        > 
            <Box color="white" w="100%" >
                {children}
            </Box>         
        </Box>
    )
}