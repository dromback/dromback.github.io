import { Box, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";
import { metaverseState } from "../../../atoms/metaversesAtom";
import About from "../../../components/Metaverse/About";
import NewPostForm from "../../../components/Posts/NewPostForm";
import { auth } from "../../../firebase/clientApp";
import useMetaverseData from "../../../hooks/useMetaverseData";
import PageContent from "../../../components/Layout/PageContent";

const CreateMetaversePostPage: NextPage = () => {
  const [user, loadingUser, error] = useAuthState(auth);
  const router = useRouter();
  const { metaverseID } = router.query;
  
  const metaverseStateValue = useRecoilValue(metaverseState);
  const { loading } = useMetaverseData();

  /**
   * Not sure why not working
   * Attempting to redirect user if not authenticated
   */
  useEffect(() => {
    if (!user && !loadingUser && metaverseStateValue.currentMetaverse.id) {
      router.push(`/metaverses/${metaverseStateValue.currentMetaverse.id}`);
    }
  }, [user, loadingUser, metaverseStateValue.currentMetaverse]);

  console.log("HERE IS USER", user, loadingUser);

  return (
    <PageContent>
      <>
        <Box p="14px 0px" borderBottom="1px solid" borderColor="white" >
          <Text fontWeight={600}>Create a post</Text>
        </Box>
        {user && (
          <NewPostForm
            metaverseId={metaverseStateValue.currentMetaverse.id}
            metaverseImageURL={metaverseStateValue.currentMetaverse.imageURL}
            user={user}
          />
        )}
      </>
      {metaverseStateValue.currentMetaverse && (
        <>
          <About
            metaverseData={metaverseStateValue.currentMetaverse}
            pt={6}
            onCreatePage
            loading={loading}
          />
        </>
      )}
    </PageContent>
  );
};

export default CreateMetaversePostPage;