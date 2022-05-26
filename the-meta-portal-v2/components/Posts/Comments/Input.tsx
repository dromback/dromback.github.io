import React, { MouseEventHandler, useState } from "react";
import { Flex, Textarea, Button, Text, useColorModeValue } from "@chakra-ui/react";
import { User } from "firebase/auth";
import AuthButtons from "../../Navbar/RightContent/AuthButtons";

type CommentInputProps = {
  comment: string;
  setComment: (value: string) => void;
  loading: boolean;
  user?: User | null;
  onCreateComment: (comment: string) => void;
};

const CommentInput: React.FC<CommentInputProps> = ({
  comment,
  setComment,
  loading,
  user,
  onCreateComment,
}) => {
    const bg = useColorModeValue('gray.200', '#242323')
    const color = useColorModeValue('black', 'white')
    const boxBg = useColorModeValue('#FFFFFF', '#121212')
  return (
    
    <Flex direction="column" position="relative" bg={boxBg}>
      {user ? (
        <>
          <Text mb={1}>
            Comment as{" "}
            <span style={{ color: "#3182CE" }}>
              {user?.email?.split("@")[0]}
            </span>
          </Text>
          <Textarea
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="What are your thoughts?"
            fontSize="10pt"
            borderRadius={4}
            minHeight="160px"
            bg={bg}
            pb={10}
            _placeholder={{ color: color }}
            _focus={{
              outline: "none",
              bg: bg,
              border: "1px solid black",
            }}
          />
          <Flex
            position="absolute"
            left="1px"
            right={0.1}
            bottom="-40px"
            justify="flex-end"
            bg={boxBg}
            p="6px 8px"
            borderRadius="0px 0px 4px 4px"
          >
            <Button
              height="26px"
              disabled={!comment.length}
              isLoading={loading}
              onClick={() => onCreateComment(comment)}
            >
              Comment
            </Button>
          </Flex>
        </>
      ) : (
        <Flex
          align="center"
          justify="space-between"
          borderRadius={2}
          border="1px solid"
          borderColor="gray.100"
          p={4}
        >
          <Text fontWeight={600}>Log in or sign up to leave a comment</Text>
          <AuthButtons />
        </Flex>
      )}
    </Flex>
  );
};
export default CommentInput;