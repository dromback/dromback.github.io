import { Divider, Text } from "@chakra-ui/react";
import { useERC20Balances, useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useEffect } from "react";
import CustomContainer from "./CustomContainer";
import { useState } from "react";
import Moralis from "moralis";

export default function Balance(){

    const {user} = useMoralis()
    const Web3Api = useMoralisWeb3Api()
    const {fetchERC20Balances, data} = useERC20Balances()

    const [ethBalance, setEthBalance] = useState(0)

    const fetchNativeBalance = async () => {
        const result = await Web3Api.account.getNativeBalance({
            chain: "eth",
            address: user.get('ethAddress')
        }).catch(e => console.log(e))
        if(result.balance) {
            setEthBalance(Moralis.Units.FromWei(result.balance))
        }
    }

    useEffect(() => {
        fetchNativeBalance()
        fetchERC20Balances({
            params: {
                chain: "eth",
                address: user.get('ethAddress')
            }
        })
    }, [])

    
    return(
        <CustomContainer>
            <Text mb="6" fontSize="xl" fontWeight="bold">ERC20 Balances: </Text>
            {ethBalance && <Text>{ethBalance} <b>ETH</b></Text>}
            <Divider />
            {data && data.map(token => (
                <div key={token.symbol}>
                    <Text>{Moralis.Units.FromWei(token.balance)} <b>{token.symbol}</b></Text>
                    <Divider />
                </div>
            ))}
        </CustomContainer>
    )
}