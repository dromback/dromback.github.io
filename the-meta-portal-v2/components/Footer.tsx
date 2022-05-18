import { Center, Flex, Image, Text } from "@chakra-ui/react";


export default function Footer() {

    return(
        <footer>
            <Flex px="15" py="7" justifyContent="space-between" bg="#121212" color="white">
                <Center>
                    <Text fontSize="xl" fontWeight="bold" >The Meta Portal</Text>
                    
                    <Image src='' size="100px" objectFit="cover" alt="logo"/>
                    
                </Center>
                <Center>
                    
                </Center>
            </Flex>
        </footer>
    )
}