import { Flex, Icon, Input, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsLink45Deg } from "react-icons/bs";
import { IoAperture } from 'react-icons/io5'
import { IoImageOutline } from "react-icons/io5";
import useDirectory from "../../hooks/useDirectory";

type CreatePostProps = {};

const CreatePostLink: React.FC<CreatePostProps> = () => {

    const bg = useColorModeValue('gray.200', '#242323')
    const color = useColorModeValue('black', 'white')
    const boxBg = useColorModeValue('#FFFFFF', '#121212')

    const router = useRouter();
    const { toggleMenuOpen } = useDirectory();
    const onClick = () => {
    // Could check for user to open auth modal before redirecting to submit
    const { metaverseID } = router.query;
    if (metaverseID) {
      router.push('/metaverses/${router.query.metaverseID}/submit');
      return;
    }
    // Open directory menu to select metaverse to post to
    toggleMenuOpen();
  };
  return (
    <Flex
      justify="space-evenly"
      align="center"
      bg={boxBg}
      height="56px"
      borderRadius={4}
      border="1px solid"
      borderColor="gray.300"
      p={2}
      mb={4}
      
    >
      <Icon as={IoAperture} fontSize={36} mr={4} />
      <Input
        placeholder="Create Post"
        fontSize="10pt"
        _placeholder={{ color: color }}
        _hover={{
          bg: bg,
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: bg,
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg={bg}
        borderColor="gray.200"
        height="36px"
        borderRadius={4}
        mr={4}
        onClick={onClick}
      />
      <Icon
        as={IoImageOutline}
        fontSize={24}
        mr={4}
        color={color}
        cursor="pointer"
      />
      <Icon as={BsLink45Deg} fontSize={24} color="gray.400" cursor="pointer" />
    </Flex>
  );
};
export default CreatePostLink;