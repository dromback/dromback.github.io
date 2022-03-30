import { extendTheme } from "@chakra-ui/react";




const overrides = {
    color: {
        light: "white",
        dark: "black"
    },
    pageBg: {
        light: 'gray.200',
        dark: '#242323'
    }

}


const customTheme = extendTheme(overrides)

export default customTheme