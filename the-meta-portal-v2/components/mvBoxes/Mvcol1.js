import { Box } from "@chakra-ui/react";


export default function Mvcol1({children}){
    return(
        <Box bg='#121212' w="50%" h="26vh" borderWidth="thin" borderColor="gray.700" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                {children}         
        </Box>
    )
}