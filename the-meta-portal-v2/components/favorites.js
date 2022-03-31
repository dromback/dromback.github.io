import { Divider, Text } from "@chakra-ui/react";
import CustomContainer from "./CustomContainer";


export default function Favorites(){

    return(
        <CustomContainer>
            <Text mb="6" fontSize="xl" fontWeight="bold">Favorites: </Text>
            <Divider />
            
        </CustomContainer>

    )
}