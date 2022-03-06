import { Button, Flex, Text } from "@chakra-ui/react";
import { Head } from "next/head";
import { useMoralis } from "react-moralis";
import Footer from "./Footer";
import Header from "./Header";


const Layout = ({children}) => {
    const {isAuthenticated, authenticate, user, logout, isLoggingOut } = useMoralis();
    
    if(!isAuthenticated){
        return(
            <>
              <Head>
                <title>Login</title>
              </Head>
              <Flex direction="column" 
              justifyContent="center" 
              alignItems="center"
              width="100vw"
              height="100vh"
              bgGradient="linear(to-br, gray.600, gray.900)"
              >
                <Text fontSize="5xl" fontWeight="bold" color="white">Dashboard</Text>
                <Button colorScheme="orange" size="lg" mt="6" 
                  onClick={() => authenticate({
                      signingMessage: "Sign to login to The Meta Portal"
                  })}
                >Authenticate with Wallet</Button>
              </Flex>
            </>
      
          )
    }
    
    return (
        <div className="content">
            <Header user={user} logout={logout} isLoggingOut={isLoggingOut}/>
            {children}
            <Footer />
        </div>
    )

}

export default Layout;
    