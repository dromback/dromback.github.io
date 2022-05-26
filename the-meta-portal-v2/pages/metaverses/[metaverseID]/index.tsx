import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { doc, getDoc } from 'firebase/firestore';
import { GetServerSidePropsContext } from 'next';
import React, { useEffect } from 'react';
import { Metaverse, metaverseState } from '../../../atoms/metaversesAtom';
import { auth, firestore } from '../../../firebase/clientApp';
import safeJsonStringify from 'safe-json-stringify';
import MetaverseNotFound from '../../../components/Metaverse/NotFound';
import Header from '../../../components/Metaverse/Header';
import PageContent from '../../../components/Layout/PageContent'
import CreatePostLink from '../../../components/Metaverse/CreatePostLink';
import Posts from '../../../components/Posts/Posts';
import About from '../../../components/Metaverse/About';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';

type MetaversePageProps = {
    metaverseData: Metaverse;
};



const MetaversePage: React.FC<MetaversePageProps> = ({ metaverseData }) => {

    const [user, loadingUser] = useAuthState(auth);

    const [metaverseStateValue, setMetaverseStateValue] =
    useRecoilState(metaverseState);

    console.log('here is the data', metaverseData)
    const pageBg = useColorModeValue('gray.200', '#242323')

    useEffect(() => {
        setMetaverseStateValue((prev) => ({
          ...prev,
          currentMetaverse: metaverseData,
        }));
      }, [metaverseData]);

    if (!metaverseData) {
        return (
            <Flex direction="column" maxW="100vw" minH="100vh" bg={pageBg} >
                <Box flex="1" px="0" py="6em" >
                    <MetaverseNotFound />
                </Box>
            </Flex>


        )
    }

    return (
        <>
            <Header metaverseData={metaverseData} />
            <PageContent>
                <>
                <Box mt='-10em'>
                    <CreatePostLink />
                    <Posts metaverseData={metaverseData} userId={user?.uid} loadingUser={loadingUser}/>
                </Box>    
                </>
                <>
                <Box mt='-10em'>
                    <About metaverseData={metaverseData} />
                </Box>
                </>
            </PageContent>
        </>
    )
}

export default MetaversePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
    try {
        const metaverseDocRef = doc(firestore, 'metaverses', context.query.metaverseID as string);
        const metaverseDoc = await getDoc(metaverseDocRef);
        return {
            props: {
                metaverseData: metaverseDoc.exists() ? JSON.parse(safeJsonStringify({ id: metaverseDoc.id, ...metaverseDoc.data() })) : '',
            },
        }
    } catch (error) {
        // Can add error page here if wanted
        console.log('getServerSideProps error', error);
    }
}



