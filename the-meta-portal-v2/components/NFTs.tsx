import { useNFTBalances } from "react-moralis";
import { useEffect } from "react";
import CustomContainer from "./CustomContainer";
import { Box, Text, Image } from "@chakra-ui/react";


export default function NFTs({user}){

    const {getNFTBalances, data} = useNFTBalances()

    useEffect(() => {
        getNFTBalances({
            params: {
                chain: "eth",
                address: user.get('ethAddress')
            }
        })
    }, [])

    // Might have to actually append the front part on as: https://ipfs.moralis.io:2053/ipfs/
    // In any case, this is just showing the meta data and not the actual image
    return(
        <CustomContainer>
            <Text fontSize="xl" fontWeight="bold">My NFTs </Text>
            {data && data.result.map(nft => (
                <Box mt="4" px="2" py="2" borderWidth="1px" borderRadius="md" key={nft.token_uri}>
                    {nft.image && <Image src={nft.image} alt={""} />}
                    {nft.token_uri}
                </Box>
            ))}
        </CustomContainer>
    )
}