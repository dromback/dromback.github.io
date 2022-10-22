import { Box, Button, Container, Flex, FormControl, Input, Text, useColorModeValue  } from "@chakra-ui/react";

import MailchimpSubscribe from 'react-mailchimp-subscribe'



const Whitelist = () => {

  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL

  const bg = useColorModeValue('gray.200', '#242323')
  const color = useColorModeValue('black', 'black')
  const boxBg = useColorModeValue('#FFFFFF', '#121212')
  const gradient = 'linear(to-b, blue.500, blue.400, blue.300)';

    return (
        <><>
            <title>Intervrs | Whitelist</title>
            <Flex direction="column" bgGradient={gradient} maxW="100vw" minH="100vh" >
              
              <Box flex="1"  px="0" py="11em" >
                  <Container h="60vh" w="100%"  maxW="80vw" maxH="120vh" rounded="lg">
                    <Box  >
                      <Text align="center" color={color}> 
                        
                        <Text fontSize="2em" mb="5" >Want to be among the first to get access to Intervrs?</Text>
                        <Text fontSize="2.5em" fontWeight="bold" mb="10">Sign up now!</Text>
                        {/* <MailchimpSubscribe
                            url={MAILCHIMP_URL}
                            render={(props: {}) => {
                                const {subscribe, status, message} = props || {};
                                return (
                                    <Flex rounded="lg" px="5" py="5" align="center" justifyContent="center" >
                                        <FormControl  w="25vw" mr="3">
                                            <Input id="email" minLength="6" maxLength="30" 
                                            type="text" placeholder="Enter your email address" _placeholder={{color: color}} _hover={{border: "1px"}} _focus={{border: "1px"}}
                                            borderColor={color} w="25vw" />
                                        </FormControl>
                                    
                                        <Button display="flex" type="submit" colorScheme="orange"
                                            status={status}
                                            message={message}
                                            onValidated={(formData: any) => subscribe(formData)}
                                        >Get Whitelisted</Button>
                                    </Flex> 
                                )
                            }}
                      /> */}
                      </Text>
                      
                    </Box>
                  </Container>
                </Box>
                
            </Flex>
        </>
        
        </>
    );

  
}

export default Whitelist;