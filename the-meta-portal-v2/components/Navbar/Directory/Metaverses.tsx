import React, { useState } from "react";
import { Box, Flex, Icon, MenuItem, Text } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { IoAperture } from 'react-icons/io5'
import { GrAdd } from "react-icons/gr";
import { useRecoilValue } from "recoil";
import { metaverseState } from "../../../atoms/metaversesAtom";
import { auth } from "../../../firebase/clientApp";
import CreateMetaverseModal from "../../Modal/CreateMetaverse";
import MenuListItem from "./MenuListItem";


type MetaversesProps = {
    menuOpen: boolean;
};

const Metaverses: React.FC<MetaversesProps> = ({ menuOpen }) => {
    const [user] = useAuthState(auth);
    const [open, setOpen] = useState(false);
    const mySnippets = useRecoilValue(metaverseState).mySnippets;

    return (
        <>
            <CreateMetaverseModal
                isOpen={open}
                handleClose={() => setOpen(false)}
                userId={user?.uid!}
            />
            {/* COULD DO THIS FOR CLEANER COMPONENTS */}
            {/* <Moderating snippets={snippetState.filter((item) => item.isModerator)} />
      <MyCommunities snippets={snippetState} setOpen={setOpen} /> */}
            {mySnippets.find((item) => item.isModerator) && (
                <Box mt={3} mb={4}>
                    <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="gray.500">
                        MODERATING
                    </Text>
                    {mySnippets
                        .filter((item) => item.isModerator)
                        .map((snippet) => (
                            <MenuListItem
                                key={snippet.metaverseId}
                                displayText={`${snippet.metaverseId}`}
                                link={`/metaverses/${snippet.metaverseId}`}
                                icon={IoAperture}
                                iconColor="brand.100"
                            />
                        ))}
                </Box>
            )}
            <Box mt={3} mb={4}>
                <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="gray.500">
                    MY METAVERSES
                </Text>
                <MenuItem
                    width="100%"
                    fontSize="10pt"
                    _hover={{ bg: "gray.100" }}
                    onClick={() => setOpen(true)}
                >
                    <Flex alignItems="center">
                        <Icon fontSize={20} mr={2} as={GrAdd} />
                        Create Metaverse
                    </Flex>
                </MenuItem>
                {mySnippets.map((snippet) => (
                    <MenuListItem
                        key={snippet.metaverseId}
                        icon={IoAperture}
                        displayText={`${snippet.metaverseId}`}
                        link={`/metaverses/${snippet.metaverseId}`}
                        iconColor="blue.500"
                        imageURL={snippet.imageURL}
                    />
                ))}
            </Box>
        </>
    );
};

export default Metaverses;