import { extendTheme } from "@chakra-ui/react";
import { Button } from "../components/Button";
import '@fontsource/open-sans';




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
    },
    fonts: {
        body: "Open Sans, sans-serif",
    }

}


const customTheme = extendTheme(overrides)

export default customTheme