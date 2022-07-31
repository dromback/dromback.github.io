import {
    Box,
    Button,
    Flex,
    Icon,
    Image,
    Skeleton,
    SkeletonCircle,
    Stack,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
  import Link from "next/link";
  import React, { useEffect, useState } from "react";
  import { IoAperture } from 'react-icons/io5'
  import { Metaverse } from "../../atoms/metaversesAtom";
  import { firestore } from "../../firebase/clientApp";
  import useMetaverseData from "../../hooks/useMetaverseData";
  
  type RecommendationsProps = {};
  
  const Recommendations: React.FC<RecommendationsProps> = () => {
    const [metaverses, setMetaverses] = useState<Metaverse[]>([]);
    const [loading, setLoading] = useState(false);
    const { metaverseStateValue, onFavoriteOrUnfavoriteMetaverse } = useMetaverseData();
  
    const getMetaverseRecommendations = async () => {
      setLoading(true);
      try {
        const metaverseQuery = query(
          collection(firestore, "metaverses"),
          orderBy("numberOfMembers", "desc"),
          limit(5)
        );
        const metaverseDocs = await getDocs(metaverseQuery);
        const metaverses = metaverseDocs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Metaverse[];
        console.log("HERE ARE COMS", metaverses);
  
        setMetaverses(metaverses);
      } catch (error: any) {
        console.log("getMetaverseRecommendations error", error.message);
      }
      setLoading(false);
    };
  
    useEffect(() => {
        getMetaverseRecommendations();
    }, []);

    const bg = useColorModeValue('gray.200', '#242323')
    const color = useColorModeValue('black', 'white')
    const boxBg = useColorModeValue('#FFFFFF', '#121212')
  
    return (
      <Flex
        direction="column"
        bg={bg}
        borderRadius={4}
        cursor="pointer"
        border="1px solid"
        borderColor="gray.300"
      >
        <Flex
          align="center"
          justifyContent='center'
          color={color}
          p="6px 10px"
          bg="orange.500"
          height="70px"
          borderRadius="4px 4px 0px 0px"
          fontWeight={600}
          bgImage="url(/images/recCommsArt.png)"
          backgroundSize="cover"
          bgGradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)),
          url('images/recCommsArt.png')"
        >
          Top Metaverses
        </Flex>
        <Flex direction="column">
          {loading ? (
            <Stack mt={2} p={3}>
              <Flex justify="space-between" align="center">
                <SkeletonCircle size="10" />
                <Skeleton height="10px" width="70%" />
              </Flex>
              <Flex justify="space-between" align="center">
                <SkeletonCircle size="10" />
                <Skeleton height="10px" width="70%" />
              </Flex>
              <Flex justify="space-between" align="center">
                <SkeletonCircle size="10" />
                <Skeleton height="10px" width="70%" />
              </Flex>
            </Stack>
          ) : (
            <>
              {metaverses.map((item, index) => {
                const isFavorite = !!metaverseStateValue.mySnippets.find(
                  (snippet) => snippet.metaverseId === item.id
                );
                return (
                  <Link key={item.id} href={`/metaverses/${item.id}`} passHref>
                    <Flex
                      position="relative"
                      align="center"
                      fontSize="10pt"
                      borderBottom="1px solid"
                      borderColor="gray.200"
                      p="10px 12px"
                      fontWeight={600}
                    >
                      <Flex width="80%" align="center">
                        <Flex width="15%">
                          <Text mr={2}>{index + 1}</Text>
                        </Flex>
                        <Flex align="center" width="80%">
                          {item.imageURL ? (
                            // <Image
                            //   borderRadius="full"
                            //   boxSize="28px"
                            //   src={item.imageURL}
                            //   mr={2}
                            //   alt='metaverse'
                            // />
                            <Icon
                              as={IoAperture}
                              fontSize={30}
                              color="brand.100"
                              mr={2}
                            />
                          ) : (
                            <Icon
                              as={IoAperture}
                              fontSize={30}
                              color="brand.100"
                              mr={2}
                            />
                          )}
                          <span
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >{`${item.id}`}</span>
                        </Flex>
                      </Flex>
                      <Box position="absolute" right="10px">
                        <Button
                          height="22px"
                          fontSize="8pt"
                          onClick={(event) => {
                            event.stopPropagation();
                            onFavoriteOrUnfavoriteMetaverse(item, isFavorite);
                          }}
                          variant={isFavorite ? "outline" : "solid"}
                        >
                          {isFavorite ? "Favorite" : "+ Favorite"}
                        </Button>
                      </Box>
                    </Flex>
                  </Link>
                );
              })}
              <Box p="10px 20px">
                <Button as='a' href="/metaverses" height="30px" width="100%">
                  View All
                </Button>
              </Box>
            </>
          )}
        </Flex>
      </Flex>
    );
  };
  export default Recommendations;