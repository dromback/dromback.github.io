import React, { useState } from "react";
import {
  Flex,
  Icon,
  Skeleton,
  Spinner,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import moment from "moment";
import { NextRouter } from "next/router";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChat, BsDot } from "react-icons/bs";
import { IoAperture } from 'react-icons/io5'
import {
  IoArrowDownCircleOutline,
  IoArrowDownCircleSharp,
  IoArrowRedoOutline,
  IoArrowUpCircleOutline,
  IoArrowUpCircleSharp,
  IoBookmarkOutline,
} from "react-icons/io5";
import { Post } from "../../../atoms/postsAtom";
import Link from "next/link";


export type PostItemContentProps = {
  post: Post;
  onVote: (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    post: Post,
    vote: number,
    metaverseId: string,
    postIdx?: number
  ) => void;
  onDeletePost: (post: Post) => Promise<boolean>;
  userIsCreator: boolean;
  onSelectPost?: (value: Post, postIdx: number) => void;
  router?: NextRouter;
  postIdx?: number;
  userVoteValue?: number;
  homePage?: boolean;
};

const PostItem: React.FC<PostItemContentProps> = ({
  post,
  postIdx,
  onVote,
  onSelectPost,
  router,
  onDeletePost,
  userVoteValue,
  userIsCreator,
  homePage,
}) => {
  const [loadingImage, setLoadingImage] = useState(true);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const singlePostView = !onSelectPost; // function not passed to [pid]

  const handleDelete = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setLoadingDelete(true);
    try {
      const success = await onDeletePost(post);
      if (!success) throw new Error("Failed to delete post");

      console.log("Post successfully deleted");

      // Could probably move this logic to onDeletePost function
      if (router) router.back();
    } catch (error: any) {
      console.log("Error deleting post", error.message);
      /**
       * Don't need to setLoading false if no error
       * as item will be removed from DOM
       */
      setLoadingDelete(false);
      // setError
    }
  };

    const bg = useColorModeValue('gray.200', '#242323')
    const color = useColorModeValue('black', 'white')
    const boxBg = useColorModeValue('#FFFFFF', '#121212')

  return (
    <Flex
      
      bg={boxBg}
      borderColor={singlePostView ? "white" : "gray.300"}
      borderRadius={singlePostView ? "4px 4px 0px 0px" : 4}
      cursor={singlePostView ? "unset" : "pointer"}
      _hover={{ borderColor: singlePostView ? "none" : "gray.500" }}
      onClick={() => onSelectPost && post && onSelectPost(post, postIdx!)}
    >
      <Flex
        direction="column"
        align="center"
        bg={singlePostView ? "none" : "blue.500"}
        p={2}
        width="40px"
        borderRadius={singlePostView ? "0" : "3px 0px 0px 3px"}
      >
        <Icon
          as={
            userVoteValue === 1 ? IoArrowUpCircleSharp : IoArrowUpCircleOutline
          }
          color={userVoteValue === 1 ? color : "gray.300"}
          fontSize={22}
          cursor="pointer"
          onClick={(event) => onVote(event, post, 1, post.metaverseId)}
        />
        <Text fontSize="9pt" fontWeight={600}>
          {post.voteStatus}
        </Text>
        <Icon
          as={
            userVoteValue === -1
              ? IoArrowDownCircleSharp
              : IoArrowDownCircleOutline
          }
          color={userVoteValue === -1 ? color : "gray.300"}
          fontSize={22}
          cursor="pointer"
          
          onClick={(event) => onVote(event, post, -1, post.metaverseId)}
        />
      </Flex>
      <Flex direction="column" width="100%">
        <Stack spacing={1} p="10px 10px">
          {post.createdAt && (
            <Stack direction="row" spacing={0.6} align="center" fontSize="9pt">
              {homePage && (
                <>
                  {post.metaverseImageURL ? (
                    <Image
                      borderRadius="full"
                      boxSize="18px"
                      src={post.metaverseImageURL}
                      mr={2}
                    />
                  ) : (
                    <Icon as={IoAperture} fontSize={18} mr={1} color="blue.500" />
                  )}
                  <Link href={`metaverses/${post.metaverseId}`}>
                    <Text
                      fontWeight={700}
                      _hover={{ textDecoration: "underline" }}
                      onClick={(event) => event.stopPropagation()}
                    >{`metaverses/${post.metaverseId}`}</Text>
                  </Link>
                  <Icon as={BsDot} color="gray.500" fontSize={8} />
                </>
              )}
              <Text color="gray.500">
                Posted by {post.userDisplayText}{" "}
                {moment(new Date(post.createdAt.seconds * 1000)).fromNow()}
              </Text>
            </Stack>
          )}
          <Text fontSize="12pt" fontWeight={600}>
            {post.title}
          </Text>
          <Text fontSize="10pt">{post.body}</Text>
          {post.imageURL && (
            <Flex justify="center" align="center" p={2}>
              {loadingImage && (
                <Skeleton height="200px" width="100%" borderRadius={4} />
              )}
              <Image
                
                maxHeight="460px"
                src={post.imageURL}
                display={loadingImage ? "none" : "unset"}
                onLoad={() => setLoadingImage(false)}
                alt="Post Image"
              />
            </Flex>
          )}
        </Stack>
        <Flex ml={1} mb={0.5} color="gray.500" fontWeight={600}>
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            <Icon as={BsChat} mr={2} />
            <Text fontSize="9pt">{post.numberOfComments}</Text>
          </Flex>
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            <Icon as={IoArrowRedoOutline} mr={2} />
            <Text fontSize="9pt">Share</Text>
          </Flex>
          <Flex
            align="center"
            p="8px 10px"
            borderRadius={4}
            _hover={{ bg: "gray.200" }}
            cursor="pointer"
          >
            <Icon as={IoBookmarkOutline} mr={2} />
            <Text fontSize="9pt">Save</Text>
          </Flex>
          {userIsCreator && (
            <Flex
              align="center"
              p="8px 10px"
              borderRadius={4}
              _hover={{ bg: "gray.200" }}
              cursor="pointer"
              onClick={handleDelete}
            >
              {loadingDelete ? (
                <Spinner size="sm" />
              ) : (
                <>
                  <Icon as={AiOutlineDelete} mr={2} />
                  <Text fontSize="9pt">Delete</Text>
                </>
              )}
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PostItem;