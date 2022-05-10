import { extendTheme } from "@chakra-ui/react";
import { Button } from "../components/Button";




const overrides = {
    color: {
        light: "white",
        dark: "black"
    },
    pageBg: {
        light: 'gray.200',
        dark: '#242323'
    },
    components: {
        Button,
    }

}


const customTheme = extendTheme(overrides)

export default customTheme