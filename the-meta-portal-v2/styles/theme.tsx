import { extendTheme } from "@chakra-ui/react";
import { Button } from "../components/Button";
import '@fontsource/open-sans';
import { mode } from "@chakra-ui/theme-tools";




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
    },
    styles: {
        global: (props) => ({
          body: {
            bg: mode('gray.200','#242323')(props),
          }
        })
      },

}


const customTheme = extendTheme(overrides)

export default customTheme