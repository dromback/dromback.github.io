import { Button, Center, Flex, Image, Link, Text } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";

export default function Login({user, logout, isLoggingOut}) {

    const { isAuthenticated, authenticate } = useMoralis();





                            <Button ml="4" colorScheme="orange"  
                                onClick={() => authenticate({
                                signingMessage: "Sign to login to The Meta Portal"
                                })} >Login
                            </Button>

}