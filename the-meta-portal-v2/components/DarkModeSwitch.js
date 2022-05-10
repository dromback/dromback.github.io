import { useColorMode, IconButton, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const DarkModeSwitch = () => {
    const {colorMode, toggleColorMode} = useColorMode()

    const bg = useColorModeValue('orange.400', 'orange.400')
    const color = useColorModeValue('black', 'white')
    
    return (
        <IconButton 
            aria-label="Toggle Dark Switch"
            bg={bg}
            color={color}
            _active={{border: "0px"}}
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            my="3" mx="3"
            onClick={toggleColorMode}    
        />
    )
}

export default DarkModeSwitch