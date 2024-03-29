import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const DarkModeSwitch = () => {
    const {colorMode, toggleColorMode} = useColorMode()

    const bg = useColorModeValue('blue.400', 'blue.400')
    const color = useColorModeValue('black', 'white')
    const hover = useColorModeValue('white', 'black')
    
    return (
        <IconButton 
            aria-label="Toggle Dark Switch"
            bg={bg}
            color={color}
            _hover={{color: hover}}
            _active={{border: "0px"}}
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            my="3" mx="3"
            onClick={toggleColorMode}    
        />
    )
}

export default DarkModeSwitch