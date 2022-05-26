import { Flex } from '@chakra-ui/react';
import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Post } from '../../../../atoms/postsAtom';
import PageContent from '../../../../components/Layout/PageContent';
import About from '../../../../components/Metaverse/About';
import Comments from '../../../../components/Posts/Comments';
import PostLoader from '../../../../components/Posts/Loader';
import PostItem from '../../../../components/Posts/PostItem';
import { auth, firestore } from '../../../../firebase/clientApp';
import useMetaverseData from '../../../../hooks/useMetaverseData';
import usePosts from '../../../../hooks/usePosts';



const PostPage: React.FC = () => {
    const [user] = useAuthState(auth);
    const router = useRouter();
    const { metaverse, pid } = router.query;
    const { metaverseStateValue } = useMetaverseData();
    const { postStateValue, setPostStateValue, onDeletePost, loading, setLoading, onVote } = usePosts(metaverseStateValue.currentMetaverse);

    const fetchPost = async () => {
        console.log("FETCHING POST");

        setLoading(true);
        try {
            const postDocRef = doc(firestore, "posts", pid as string);
            const postDoc = await getDoc(postDocRef);
            setPostStateValue((prev) => ({
                ...prev,
                selectedPost: { id: postDoc.id, ...postDoc.data() } as Post,
            }));
            // setPostStateValue((prev) => ({
            //   ...prev,
            //   selectedPost: {} as Post,
            // }));
        } catch (error: any) {
            console.log("fetchPost error", error.message);
        }
        setLoading(false);
    };

    // Fetch post if not in already in state
    useEffect(() => {
        const { pid } = router.query;

        if (pid && !postStateValue.selectedPost) {
            fetchPost();
        }
    }, [router.query, postStateValue.selectedPost]);

    return (
        <PageContent>
            <>
                {loading ? (
                    <PostLoader />
                ) : (
                    <>
                        {postStateValue.selectedPost && (
                            <>
                                <PostItem
                                    post={postStateValue.selectedPost}
                                    // postIdx={postStateValue.selectedPost.postIdx}
                                    onVote={onVote}
                                    onDeletePost={onDeletePost}
                                    userVoteValue={
                                        postStateValue.postVotes.find(
                                            (item) => item.postId === postStateValue.selectedPost!.id
                                        )?.voteValue
                                    }
                                    userIsCreator={
                                        user?.uid === postStateValue.selectedPost.creatorId
                                    }
                                    router={router}
                                />
                                <Comments
                                    user={user}
                                    metaverse={metaverse as string}
                                    selectedPost={postStateValue.selectedPost}
                                />
                            </>
                        )}
                    </>
                )}
            </>
            <>
                <About
                    metaverseData={
                        metaverseStateValue.currentMetaverse
                        // communityStateValue.visitedCommunities[community as string]
                    }
                    loading={loading}
                />
            </>
        </PageContent>
    )
}
export default PostPage;