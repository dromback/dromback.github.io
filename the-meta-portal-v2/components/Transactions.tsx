import { useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from "react";
import CustomContainer from "./CustomContainer";
import { Divider, Link, Text } from "@chakra-ui/react";


export default function Transactions({user}){

    const Web3Api = useMoralisWeb3Api()
    const BASE_URL = "https://etherscan.io/tx/"

    const [transactions, setTransactions] = useState([])

    const fetchTransactions = async () => {
        const data = await Web3Api.account.getTransactions({
            chain: "eth",
            address: user.get('ethAddress'),
            limit: 5
        })
        if(data){
            setTransactions(data.result)
        }
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    
    return(
        <CustomContainer>
            <Text fontSize="xl" mb="6" fontWeight="bold">Last 5 transactions: </Text>
            {transactions && transactions.map(transaction => (
                <div key={transaction.hash}>
                    <Link href={`${BASE_URL}${transaction.hash}`} isExternal>{transaction.hash}</Link>
                    <Divider />
                </div>
            ))}
        </CustomContainer>
    )
}