import { useColorModeValue } from "@chakra-ui/react";
import type { ComponentStyleConfig } from "@chakra-ui/theme";




export const Button: ComponentStyleConfig = {

  

  baseStyle: {
    borderRadius: "60px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
    },
  },
  variants: {
    solid: {
      color: 'white',
      bg: "orange.500",
      _hover: {
        bg: "orange.400",
      },
    },
    outline: {
      color: "orange.500",
      bg: "orange.200",
      border: "1px solid",
      borderColor: "orange.500",
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
    favorite: {
      height: "26px",
      width: "90px",
      color: "white",
      bg: "orange.500",
      border: "1px solid",
      borderColor: "orange.500",
      _hover: {
        bg: "orange.200",
        color: "orange.500"
      },
    },
    addFavorite: {
      height: "26px",
      width: "90px",
      color: "orange.500",
      bg: "orange.200",
      border: "1px solid",
      borderColor: "orange.500",
      _hover: {
        bg: "orange.500",
        color: "white"
      },
    },
  },
};