import React from "react";
import { Button, Flex, Icon, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { IoAperture } from 'react-icons/io5'

    

const PersonalHome: React.FC = () => {

  const bg = useColorModeValue('gray.200', '#242323')
  const color = useColorModeValue('black', 'white')
  const boxBg = useColorModeValue('#FFFFFF', '#121212')

  return (
    <Flex
      direction="column"
      bg={bg}
      borderRadius={4}
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      position="sticky"
    >
      <Flex
        align="flex-end"
        color="white"
        p="6px 10px"
        bg="blue.500"
        height="34px"
        borderRadius="4px 4px 0px 0px"
        fontWeight={600}
        bgImage="url(/images/redditPersonalHome.png)"
        backgroundSize="cover"
      ></Flex>
      <Flex direction="column" p="12px">
        <Flex align="center" mb={2}>
          <Icon as={IoAperture} fontSize={50} color="brand.100" mr={2} />
          <Text fontWeight={600}>Home</Text>
        </Flex>
        <Stack spacing={3}>
          <Text fontSize="9pt">
            Your own Metaverse homepage, built just for you.
          </Text>
          <Button height="30px">Create Post</Button>
          <Button variant="outline" height="30px">
            Create Metaverse
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};
export default PersonalHome;