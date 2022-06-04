import { useEffect, useState } from "react";
import { doc, getDoc, increment, writeBatch } from "firebase/firestore";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authModalState } from "../atoms/authModalAtom";
import {
  Metaverse,
  MetaverseSnippet,
  metaverseState,
  defaultMetaverse,
} from "../atoms/metaversesAtom";
import { auth, firestore } from "../firebase/clientApp";
import { getMySnippets } from "../helpers/firestore";

// Add ssrCommunityData near end as small optimization
const useMetaverseData = (ssrMetaverseData?: boolean) => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [metaverseStateValue, setMetaverseStateValue] =
    useRecoilState(metaverseState);
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user || !!metaverseStateValue.mySnippets.length) return;

    getSnippets();
  }, [user]);

  const getSnippets = async () => {
    setLoading(true);
    try {
      const snippets = await getMySnippets(user?.uid!);
      setMetaverseStateValue((prev) => ({
        ...prev,
        mySnippets: snippets as MetaverseSnippet[],
        initSnippetsFetched: true,
      }));
      setLoading(false);
    } catch (error: any) {
      console.log("Error getting user snippets", error);
      setError(error.message);
    }
    setLoading(false);
  };

  const getMetaverseData = async (metaverseId: string) => {
    // this causes weird memory leak error - not sure why
    // setLoading(true);
    console.log("GETTING METAVERSE DATA");

    try {
      const metaverseDocRef = doc(
        firestore,
        "communities",
        metaverseId as string
      );
      const metaverseDoc = await getDoc(metaverseDocRef);
      
      setMetaverseStateValue((prev) => ({
        ...prev,
        currentMetaverse: {
          id: metaverseDoc.id,
          ...metaverseDoc.data(),
        } as Metaverse,
      }));
    } catch (error: any) {
      console.log("getMetaverseData error", error.message);
    }
    setLoading(false);
  };



  const onFavoriteOrUnfavoriteMetaverse = (metaverse: Metaverse, isFavorite?: boolean) => {
    console.log("ON JOIN LEAVE", metaverse.id);

    if (!user) {
      setAuthModalState({ open: true, view: "login" });
      return;
    }

    setLoading(true);
    if (isFavorite) {
        unfavoriteMetaverse(metaverse.id);
      return;
    }
    favoriteMetaverse(metaverse);
  };

  const favoriteMetaverse = async (metaverse: Metaverse) => {
    console.log("JOINING METAVERSE: ", metaverse.id);
    try {
      const batch = writeBatch(firestore);

      const newSnippet: MetaverseSnippet = {
        metaverseId: metaverse.id,
        imageURL: metaverse.imageURL || "",
      };
      batch.set(
        doc(
          firestore,
          `users/${user?.uid}/metaverseSnippets`,
          metaverse.id // will for sure have this value at this point
        ),
        newSnippet
      );

      batch.update(doc(firestore, "metaverses", metaverse.id), {
        numberOfMembers: increment(1),
      });

      // perform batch writes
      await batch.commit();

      // Add current metaverse to snippet
      setMetaverseStateValue((prev) => ({
        ...prev,
        mySnippets: [...prev.mySnippets, newSnippet],
      }));
    } catch (error) {
      console.log("joinMetaverse error", error);
    }
    setLoading(false);
  };

  const unfavoriteMetaverse = async (metaverseId: string) => {
    try {
      const batch = writeBatch(firestore);

      batch.delete(
        doc(firestore, `users/${user?.uid}/metaverseSnippets/${metaverseId}`)
      );

      batch.update(doc(firestore, "metaverses", metaverseId), {
        numberOfMembers: increment(-1),
      });

      await batch.commit();

      setMetaverseStateValue((prev) => ({
        ...prev,
        mySnippets: prev.mySnippets.filter(
          (item) => item.metaverseId !== metaverseId
        ),
      }));
    } catch (error) {
      console.log("leaveMetaverse error", error);
    }
    setLoading(false);
  };


  useEffect(() => {
    
    const { metaverseID } = router.query;
    if (metaverseID) {
      const metaverseData = metaverseStateValue.currentMetaverse;

      if (!metaverseData.id) {
        getMetaverseData(metaverseID as string);
        return;
      }
      
    } else {
      
      setMetaverseStateValue((prev) => ({
        ...prev,
        currentMetaverse: defaultMetaverse,
      }));
    }
  }, [router.query, metaverseStateValue.currentMetaverse]);


  return {
    metaverseStateValue,
    onFavoriteOrUnfavoriteMetaverse,
    loading,
    setLoading,
    error,
  };
};

export default useMetaverseData;
