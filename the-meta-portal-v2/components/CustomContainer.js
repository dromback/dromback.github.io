import { Box } from "@chakra-ui/react";

export default function CustomContainer({children}){
    return(
        <Box mx="auto" bg="#121212" width="50vw" px="20" py="10" rounded="lg" shadow="lg" textAlign="left">
            {children}
        </Box>
    )
}