import { FieldValue, Timestamp } from "firebase/firestore";
import { atom } from "recoil";

export interface Metaverse {
    id: string;
    name: string;
    description: string;
    creatorId: string;
    numberOfMembers: number;
    privacyType?: 'public' | 'restricted' | 'private';
    createdAt?: Timestamp;
    imageURL?: string;
}

export interface MetaverseSnippet {
    metaverseId: string;
    isModerator?: boolean;
    imageURL?: string;
}

interface MetaverseState {
    [key: string]:
    | MetaverseSnippet[]
    | { [key: string]: Metaverse }
    | Metaverse
    | boolean
    | undefined;
  mySnippets: MetaverseSnippet[];
  initSnippetsFetched: boolean;
  visitedMetaverses: {
    [key: string]: Metaverse;
  };
  currentMetaverse: Metaverse;
}

export const defaultMetaverse: Metaverse = {
    id: "",
    name: "",
    description: "",
    creatorId: "",
    numberOfMembers: 0,
    privacyType: "public",
  };

const defaultMetaverseState: MetaverseState = {
    mySnippets: [],
    initSnippetsFetched: false,
    visitedMetaverses: {},
    currentMetaverse: defaultMetaverse,
}

export const metaverseState = atom<MetaverseState>({
    key: 'metaversesState',
    default: defaultMetaverseState,
})