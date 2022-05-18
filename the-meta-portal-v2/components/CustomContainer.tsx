import { Box, useColorModeValue } from "@chakra-ui/react";

export default function CustomContainer({children}){

    const bg = useColorModeValue('#FFFFFF', '#121212')

    return(
        <Box mx="auto" bg={bg} width="50vw" px="20" py="10" rounded="lg" shadow="lg" textAlign="left">
            {children}
        </Box>
    )
}