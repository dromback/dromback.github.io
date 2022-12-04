import { Box } from "@chakra-ui/react";
import React, { useState } from "react";

type PostsHomeProps = {};

const PostsHome: React.FC<PostsHomeProps> = () => {
  const [loading, setLoading] = useState(false);

  // stuff related to home page only
  return (
    <>
      <Box>Home Posts Wrapper</Box>
    </>
  )
};
export default PostsHome;