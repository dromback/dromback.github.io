import { collection, doc, getDocs, increment, writeBatch } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { authModalState } from '../atoms/authModalAtom';
import { Metaverse, MetaverseSnippet, metaverseState } from '../atoms/metaversesAtom';
import { auth, firestore } from '../firebase/clientApp';


const useMetaverseData = () => {

    const [user] = useAuthState(auth);
    const [metaverseStateValue, setMetaverseStateValue] = useRecoilState(metaverseState)
    const setAuthModalState = useSetRecoilState(authModalState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const onFavoriteOrUnfavoriteMetaverse = (metaverseData: Metaverse, isFavorite: boolean) => {
        if(!user){
            setAuthModalState({open: true, view: 'login' })
            return;
        }
        setLoading(true);
        if (isFavorite) {
            unfavoriteMetaverse(metaverseData.id);
            return;
        }
        favoriteMetaverse(metaverseData);
    };

    const getMySnippets = async () => {
        setLoading(true);
        try {
            const snippetDocs = await getDocs(collection(firestore, 'users/${user?.uid}/metaverseSnippets'));
            const snippets = snippetDocs.docs.map(doc => ({ ...doc.data() }))
            setMetaverseStateValue(prev => ({
                ...prev,
                mySnippets: snippets as MetaverseSnippet[],
            }))
        } catch (error: any) {
            console.log('getMySnippets error', error)
            setError(error.message)
        }
        setLoading(false);
    }

    const favoriteMetaverse = async (metaverseData: Metaverse) => {
        try {
            const batch = writeBatch(firestore);
            const newSnippet: MetaverseSnippet = {
                metaverseId: metaverseData.id,
                imageURL: metaverseData.imageURL || '',
            }
            batch.set(doc(firestore, 'users/${user?.uid}/metaverseSnippets', metaverseData.id), newSnippet);
            batch.update(doc(firestore, 'metaverses', metaverseData.id), {
                numberOfMembers: increment(1)
            })
            await batch.commit();

            setMetaverseStateValue((prev) => ({
                ...prev,
                mySnippets: [...prev.mySnippets, newSnippet],
            }))
        } catch (error: any) {
            console.log('favoriteMetaverse error', error);
            setError(error.message);
        }
        setLoading(false);
    };

    const unfavoriteMetaverse = async (metaverseId: string) => {
        try {
            const batch = writeBatch(firestore);

            batch.delete(doc(firestore, 'users/${user?.uid}/metaverseSnippets', metaverseId));
            batch.update(doc(firestore, 'metaverses', metaverseId), {
                numberOfMembers: increment(-1),
            })
            await batch.commit();
            setMetaverseStateValue((prev) => ({
                ...prev,
                mySnippets: prev.mySnippets.filter((item) => item.metaverseId !== metaverseId),
            }))
        } catch (error: any) {
            console.log('unFavoriteMetaverse error', error.message);
            setError(error.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (!user) return;
        getMySnippets();
    }, [user]);

    return {
        metaverseStateValue,
        onFavoriteOrUnfavoriteMetaverse,
        loading,

    }
}
export default useMetaverseData;