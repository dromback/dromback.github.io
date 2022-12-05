import { Flex, Icon, useColorModeValue } from '@chakra-ui/react';
import React, { ReactHTML, useRef, useState } from 'react';
import { BsLink45Deg, BsMic } from 'react-icons/bs';
import { IoDocumentText, IoImageOutline } from 'react-icons/io5';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BiPoll } from 'react-icons/bi';
import TabItem from './TabItem';
import TextInputs from './PostForm/TextInputs';
import ImageUpload from './PostForm/ImageUpload';
import { User } from 'firebase/auth';
import { useRouter } from 'next/router';
import { postState } from '../../atoms/postsAtom';
import { addDoc, collection, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import { firestore, storage } from '../../firebase/clientApp';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { useSetRecoilState } from 'recoil';

type NewPostFormProps = {
    metaverseId: string;
    metaverseImageURL?: string;
    user: User;
};

const formTabs = [
    {
        title: 'Post',
        icon: IoDocumentText,
    },
    {
        title: 'Images & Video',
        icon: IoImageOutline,
    },
    {
        title: 'Link',
        icon: BsLink45Deg,
    },
    {
        title: 'Poll',
        icon: BiPoll,
    },

];

// Renamed TabItem to FormTabItem
export type FormTabItem = {
    title: string;
    icon: typeof Icon.arguments;
}

const NewPostForm: React.FC<NewPostFormProps> = ({ metaverseId, metaverseImageURL, user }) => {
    
    const [selectedTab, setSelectedTab] = useState(formTabs[0].title)
    const [textInputs, setTextInputs] = useState({
        title: '',
        body: '',
    });

    const [selectedFile, setSelectedFile] = useState<string>();
    const selectFileRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();
    const setPostItems = useSetRecoilState(postState);

    

    const handleCreatePost = async () => {
        setLoading(true);
        const { title, body } = textInputs;
        try {
          const postDocRef = await addDoc(collection(firestore, "posts"), {
            metaverseId,
            metaverseImageURL: metaverseImageURL || "",
            creatorId: user.uid,
            userDisplayText: user.email!.split("@")[0],
            title,
            body,
            numberOfComments: 0,
            voteStatus: 0,
            createdAt: serverTimestamp(),
            editedAt: serverTimestamp(),
          });
    
          console.log("HERE IS NEW POST ID", postDocRef.id);
    
          // // check if selectedFile exists, if it does, do image processing
          if (selectedFile) {
            const imageRef = ref(storage, `posts/${postDocRef.id}/image`);
            await uploadString(imageRef, selectedFile, "data_url");
            const downloadURL = await getDownloadURL(imageRef);
            await updateDoc(postDocRef, {
              imageURL: downloadURL,
            });
            console.log("HERE IS DOWNLOAD URL", downloadURL);
          }
    
          // Clear the cache to cause a refetch of the posts
          setPostItems((prev) => ({
            ...prev,
            postUpdateRequired: true,
          }));
          router.back();
        } catch (error) {
          console.log("createPost error", error);
          setError("Error creating post");
        }
        setLoading(false);
      };

      const onSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        if (event.target.files?.[0]) {
          reader.readAsDataURL(event.target.files[0]);
        }
    
        reader.onload = (readerEvent) => {
          if (readerEvent.target?.result) {
            setSelectedFile(readerEvent.target?.result as string);
          }
        };
      };

      const onTextChange = ({
        target: { name, value },
      }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTextInputs((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

        const bg = useColorModeValue('gray.200', '#242323')
        const color = useColorModeValue('black', 'white')
        const boxBg = useColorModeValue('#FFFFFF', '#121212')
        return (
            <Flex direction='column' bg={boxBg} color={color} borderRadius='4' mt='2' >
                <Flex w='100%'>
                    {formTabs.map((item, index) => (
                      // @ts-ignore
                        <TabItem key={index} item={item} selected={item.title === selectedTab} setSelectedTab={setSelectedTab} />
                    ))}
                </Flex>
                <Flex p='4'>
                    {selectedTab === 'Post' && (
                        <TextInputs
                            textInputs={textInputs}
                            handleCreatePost={handleCreatePost}
                            onChange={onTextChange}
                            loading={loading}
                        />
                    )}
                    {selectedTab === 'Images & Video' && (
                        <ImageUpload
                        selectedFile={selectedFile}
                        setSelectedFile={setSelectedFile}
                        setSelectedTab={setSelectedTab}
                        // @ts-ignore
                        selectFileRef={selectFileRef}
                        onSelectImage={onSelectImage}
                        />)}
                </Flex>
            </Flex>
        )
    }
    export default NewPostForm;