import React, { useRef, useState } from "react";
import {
    Box,
    Button,
    Divider,
    Flex,
    Icon,
    Skeleton,
    SkeletonCircle,
    Stack,
    Text,
    Image,
    Spinner,
    useColorModeValue,
} from "@chakra-ui/react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { RiCakeLine } from "react-icons/ri";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore, storage } from "../../firebase/clientApp";
import { Metaverse, metaverseState } from "../../atoms/metaversesAtom";
import moment from "moment";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IoAperture } from 'react-icons/io5'
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { useRouter } from "next/router";

type AboutProps = {
    metaverseData: Metaverse;
    pt?: number;
    onCreatePage?: boolean;
    loading?: boolean;
};

const About: React.FC<AboutProps> = ({
    metaverseData,
    pt,
    onCreatePage,
    loading,
}) => {
    const [user] = useAuthState(auth); 
    const router = useRouter();
    const selectFileRef = useRef<HTMLInputElement>(null);
    const setMetaverseStateValue = useSetRecoilState(metaverseState);

    
    const [selectedFile, setSelectedFile] = useState<string>();

    
    const [imageLoading, setImageLoading] = useState(false);

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

    const updateImage = async () => {
        if (!selectedFile) return;
        setImageLoading(true);
        try {
            const imageRef = ref(storage, `metaverses/${metaverseData.id}/image`);
            await uploadString(imageRef, selectedFile, "data_url");
            const downloadURL = await getDownloadURL(imageRef);
            await updateDoc(doc(firestore, "metaverses", metaverseData.id), {
                imageURL: downloadURL,
            });
            console.log("HERE IS DOWNLOAD URL", downloadURL);

            
            setMetaverseStateValue((prev) => ({
                ...prev,
                currentMetaverse: {
                    ...prev.currentMetaverse,
                    imageURL: downloadURL,
                },
            }));
        } catch (error: any) {
            console.log("updateImage error", error.message);
        }
        

        setImageLoading(false);
    };

    const bg = useColorModeValue('gray.200', '#242323')
    const color = useColorModeValue('black', 'white')
    const boxBg = useColorModeValue('#FFFFFF', '#121212')

    return (
        <Box pt={pt} position="sticky" top="14px">
            <Flex
                justify="space-between"
                align="center"
                p={3}
                color={color}
                bg='orange.500'
                borderRadius="4px 4px 0px 0px"
            >
                <Text fontSize="10pt" fontWeight={700} color={color}>
                    About Metaverse
                </Text>
                <Icon as={HiOutlineDotsHorizontal} cursor="pointer" />
            </Flex>
            <Flex direction="column" p={3} bg={boxBg} borderRadius="0px 0px 4px 4px">
                {loading ? (
                    <Stack mt={2}>
                        <SkeletonCircle size="10" />
                        <Skeleton height="10px" />
                        <Skeleton height="20px" />
                        <Skeleton height="20px" />
                        <Skeleton height="20px" />
                    </Stack>
                ) : (
                    <>
                        {user?.uid === metaverseData?.creatorId && (
                            <Box
                                bg={boxBg}
                                width="100%"
                                p={2}
                                borderRadius={4}
                                border="1px solid"
                                borderColor="gray.300"
                                cursor="pointer"
                            >
                                <Text fontSize="9pt" fontWeight={700} color="blue.500">
                                    Add description
                                </Text>
                            </Box>
                        )}
                        <Stack spacing={2}>
                            <Flex width="100%" p={2} fontWeight={600} fontSize="10pt">
                                <Flex direction="column" flexGrow={1}>
                                    <Text>
                                        {metaverseData?.numberOfMembers?.toLocaleString()}
                                    </Text>
                                    <Text color={color}>Members</Text>
                                </Flex>
                                <Flex direction="column" flexGrow={1}>
                                    <Text color={color}>1</Text>
                                    <Text color={color}>Online</Text>
                                </Flex>
                            </Flex>
                            <Divider />
                            <Flex
                                align="center"
                                width="100%"
                                p={1}
                                fontWeight={500}
                                fontSize="10pt"
                            >
                                <Icon as={RiCakeLine} mr={2} fontSize={18} />
                                {metaverseData?.createdAt && (
                                    <Text color={color}>
                                        Created{" "}
                                        {moment(
                                            new Date(metaverseData.createdAt!.seconds * 1000)
                                        ).format("MMM DD, YYYY")}
                                    </Text>
                                )}
                            </Flex>
                            {!onCreatePage && (
                                <Link href={`/metaverses/${router.query.metaverseID}/submit`} passHref>
                                    <Button mt={3} height="30px" color={color}>
                                        Create Post
                                    </Button>
                                </Link>
                            )}
                            {/* !!!ADDED AT THE VERY END!!! INITIALLY DOES NOT EXIST */}
                            {user?.uid === metaverseData?.creatorId && (
                                <>
                                    <Divider />
                                    <Stack fontSize="10pt" spacing={1}>
                                        <Text fontWeight={600} color={color}>Admin</Text>
                                        <Flex align="center" justify="space-between">
                                            <Text
                                                color={color}
                                                cursor="pointer"
                                                _hover={{ textDecoration: "underline" }}
                                                onClick={() => selectFileRef.current?.click()}
                                            >
                                                Change Image
                                            </Text>
                                            {metaverseData?.imageURL || selectedFile ? (
                                                <Image
                                                    borderRadius="full"
                                                    boxSize="40px"
                                                    src={selectedFile || metaverseData?.imageURL}
                                                    alt="Dan Abramov"
                                                />
                                            ) : (
                                                <Icon
                                                    as={IoAperture}
                                                    fontSize={40}
                                                    color="brand.100"
                                                    mr={2}
                                                />
                                            )}
                                        </Flex>
                                        {selectedFile &&
                                            (imageLoading ? (
                                                <Spinner />
                                            ) : (
                                                <Text cursor="pointer" onClick={updateImage}>
                                                    Save Changes
                                                </Text>
                                            ))}
                                        <input
                                            id="file-upload"
                                            type="file"
                                            accept="image/x-png,image/gif,image/jpeg"
                                            hidden
                                            ref={selectFileRef}
                                            onChange={onSelectImage}
                                        />
                                    </Stack>
                                </>
                            )}
                        </Stack>
                    </>
                )}
            </Flex>
        </Box>
    );
};
export default About;