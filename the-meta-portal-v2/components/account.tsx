import { Box, Button, FormControl, FormLabel, Input, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Moralis from "moralis";
import CustomContainer from "./CustomContainer";

export default function Account(){
    const [input, setInput] = useState('')
    const {user, isAuthenticated, setUserData, isUserUpdating} = useMoralis();
    const [username, setUsername] = useState(user && user.attributes.username);
    const [email, setEmail] = useState(user && user.attributes.email);
    const [password, setPassword] = useState('');

      
    useEffect(() =>{
      if(!user) return null;
      setUsername(user.getUsername())
      setEmail(user.getEmail())
    }, [user])

    const color = useColorModeValue('black', 'white')

    return(
        <Box >
            <CustomContainer>
                    <Text><b>Username: </b> {Moralis.User.current().attributes.username}
                      </Text>
                    <Text><b>Email: </b> {user.getEmail()} </Text>
                    <Text><b>Wallet Address: </b> {user.get('ethAddress')} </Text>
                    {/* Change Settings */}
                    <form onSubmit={e => {
                        e.preventDefault()
                        if(input.trim() !== '') {
                            setUserData({
                                username: input,
                                email: email,
                                password: password === "" ? undefined : password
                            }).then(() => setInput('')).then(() => setEmail ('')).then(() => setPassword(''))
                        }
                    }}>
                        <FormControl mt="6" mb="6">
                            <FormLabel htmlFor="username">Set a new username:</FormLabel>
                            {/* @ts-expect-error */}
                              <Input type="text" minLength="3" maxLength="30" id="username"  placeholder="New Username" _placeholder={{color: color}} _focus={{border: "1px"}}
                              value={input} onChange={e => setInput(e.target.value)} borderColor={color} />
                            <FormLabel mt="6" htmlFor="email">Set your email:</FormLabel >
                            {/* @ts-expect-error */}
                              <Input id="email" value={email} minLength="3" maxLength="30" 
                              type="text" placeholder="New Email" _placeholder={{color: color}} _focus={{border: "1px"}}
                              onChange={(event) => setEmail(event.currentTarget.value)} borderColor={color} />
                            <FormLabel htmlFor="password" mt="6" >Set your password:</FormLabel>
                            {/* @ts-expect-error */}
                              <Input id="password" type="password" placeholder="New Password" minLength="8" maxLength="30" _placeholder={{color: color}} _focus={{border: "1px"}}
                              value={password} onChange={(event) => setPassword(event.currentTarget.value)} borderColor={color}/>
                        </FormControl>
                        
                        <Button type="submit" colorScheme="blue" disabled={isUserUpdating} mt="3" >Save Settings</Button>
                    </form>
                </CustomContainer>
        </Box>
    )
}