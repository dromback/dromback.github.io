import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

const MetaverseNotFound: React.FC = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
    >
      Sorry, that metaverse does not exist or has been banned
      <Link href="/" passHref>
        <Button mt={4}>Return Home</Button>
      </Link>
    </Flex>
  );
};
export default MetaverseNotFound;