import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { Head } from "next/head";
import Header from "../components/Header";
import { useMoralis } from "react-moralis";
import react from "react";




const About = () => {
    

    return (
        <><>
            <Flex direction="column" width="100vw" height="100vh">
                <Header />
            </Flex>
        </>
        
        <div>
            
                <Text>About</Text>
                <p>Test Text</p>
        </div></>
    );
}

export default About;

